import {
  FETCH_MESSAGES,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILED,
  SEND_MESSAGE,
  STOP_FETCH_MESSAGES,
  SET_ACTIVE_CHAT,
} from '../types';
import store from '../store';
// import {RequestPushMsg} from '../other/NotificationFunctions';

export const fetchChatMessages = bookingId => dispatch => firebase => {
  const {chatRef} = firebase;

  dispatch({
    type: FETCH_MESSAGES,
    payload: bookingId,
  });
  chatRef(bookingId).on('value', snapshot => {
    if (snapshot.val()) {
      let rootEntry = snapshot.val();
      let allMesseges = [];
      for (let key in rootEntry) {
        let entryKey = rootEntry[key];
        for (let msgKey in entryKey) {
          entryKey[msgKey].smsId = msgKey;
          allMesseges.push(entryKey[msgKey]);
        }
      }
      dispatch({
        type: FETCH_MESSAGES_SUCCESS,
        payload: allMesseges,
      });
    } else {
      dispatch({
        type: FETCH_MESSAGES_FAILED,
        payload: store.getState().languagedata.defaultLanguage.chat_not_found,
      });
    }
  });
};

export const sendMessage = data => dispatch => firebase => {
  const {chatRef} = firebase;

  const chatId = data.booking.customer + ',' + data.booking.driver;
  var today = new Date();
  var time = today.getHours() + ':' + today.getMinutes();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + ':' + dd + ':' + yyyy;

  const msg = {
    message: data.message,
    from: data.role == 'rider' ? data.booking.customer : data.booking.driver,
    type: 'msg',
    msgDate: today,
    msgTime: time,
    source: data.role,
  };

  chatRef(data.booking.id).child(chatId).push(msg);

  if (data.role == 'rider') {
    RequestPushMsg(data.booking.driver_token, {
      title:
        store.getState().languagedata.defaultLanguage.notification_title +
        store.getState().languagedata.defaultLanguage.chat_requested,
      msg: data.message,
      screen: 'onlineChat',
      params: {bookingId: data.booking.id},
    })(firebase);
  } else {
    RequestPushMsg(data.booking.customer_token, {
      title:
        store.getState().languagedata.defaultLanguage.notification_title +
        store.getState().languagedata.defaultLanguage.chat_requested,
      msg: data.message,
      screen: 'onlineChat',
      params: {bookingId: data.booking.id},
    })(firebase);
  }

  dispatch({
    type: SEND_MESSAGE,
    payload: msg,
  });
};

export const stopFetchMessages = bookingId => dispatch => firebase => {
  const {chatRef} = firebase;

  dispatch({
    type: STOP_FETCH_MESSAGES,
    payload: bookingId,
  });
  chatRef(bookingId).off();
};

export const addChat = userChat => dispatch => firebase => {
  const {chatRef, auth, usersRef} = firebase;
  const userLogged = auth.currentUser.uid;
  let newChat = chatRef.push();
  newChat.child('members').child(userLogged).set({
    id: userLogged,
  });
  newChat.child('members').child(userChat).set({
    id: userChat,
  });

  let chatId = newChat.key;

  usersRef.child(userLogged).child('chats').child(chatId).set({
    id: chatId,
  });

  usersRef.child(userChat).child('chats').child(chatId).set({
    id: chatId,
  });

  dispatch({
    type: SET_ACTIVE_CHAT,
    payload: {
      chatId,
    },
  });
};
