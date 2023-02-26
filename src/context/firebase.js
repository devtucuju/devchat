import React, {createContext} from 'react';

import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';

import store from '../store/store';
import {
  // fetchUser,
  // mainSignUp,
  // mobileSignIn,
  // facebookSignIn,
  // appleSignIn,
  signOut,
  // updateProfile,
  // clearLoginError,
  // updatePushToken,
  // updateProfileImage,
  // requestPhoneOtpDevice,
  // deleteUser,
  // validateReferer,
  // checkUserExists,
  // monitorProfileChanges,
  // fetchProfile,
  checkLogin,
  signUp,
  signIn,
  changeEmail,
  changeName,
  changePassword,
} from '../store/actions/authactions';
import {getUsers} from '../store/actions/usersactions';
import {addChat} from '../store/actions/chatactions';

const FirebaseContext = createContext(null);

const FirebaseProvider = ({config, children}) => {
  let firebase = {
    app: null,
    database: null,
    auth: null,
    storage: null,
  };

  if (!app.apps.length) {
    app.initializeApp(config);
    firebase = {
      app: app,
      config: config,
      database: app.database(),
      auth: app.auth(),
      authRef: app.auth(),
      usersRef: app.database().ref('users'),
      singleUserRef: uid => app.database().ref('users/' + uid),
      api: {
        checkLogin: () => dispatch => checkLogin()(dispatch)(firebase),
        signUp: (name, email, password) => dispatch =>
          signUp(name, email, password)(dispatch)(firebase),
        signIn: (email, password) => dispatch =>
          signIn(email, password)(dispatch)(firebase),
        signOut: () => dispatch => signOut()(dispatch)(firebase),
        changeEmail: email => changeEmail(email),
        changeName: name => changeName(name),
        changePassword: password => changePassword(password),
        getUsers: () => dispatch => getUsers()(dispatch)(firebase),
        addChat: userChat => dispatch => addChat(userChat)(dispatch)(firebase),
      },
    };
  }

  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
};

export {FirebaseContext, FirebaseProvider, store};
