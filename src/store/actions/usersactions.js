import {
  FETCH_ALL_USERS,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_FAILED,
  // EDIT_USER,
  // EDIT_USER_SUCCESS,
  // EDIT_USER_FAILED,
  // DELETE_USER,
  // DELETE_USER_SUCCESS,
  // DELETE_USER_FAILED,
  // FETCH_ALL_USERS_STATIC,
  // FETCH_ALL_USERS_STATIC_SUCCESS,
  // FETCH_ALL_USERS_STATIC_FAILED,
} from '../types';

// export const getUsers = () => dispatch => firebase => {
//   const {usersRef} = firebase;

//   dispatch({
//     type: FETCH_ALL_USERS,
//     payload: null,
//   });
//   usersRef.on('value', snapshot => {
//     if (snapshot.val()) {
//       const data = snapshot.val();
//       // const arr = Object.keys(data)
//       //   .filter(i => data[i].usertype != 'admin')
//       //   .map(i => {
//       //     data[i].id = i;
//       //     return data[i];
//       //   });
//       dispatch({
//         type: FETCH_ALL_USERS_SUCCESS,
//         payload: {users: data},
//       });
//     } else {
//       dispatch({
//         type: FETCH_ALL_USERS_FAILED,
//         payload: 'No users available.',
//       });
//     }
//   });
// };

export const getUsers = () => dispatch => firebase => {
  const {usersRef, auth} = firebase;
  const userLogged = auth.currentUser.uid;
  dispatch({
    type: FETCH_ALL_USERS,
    payload: null,
  });
  usersRef.orderByChild('name').once('value', snapshot => {
    if (snapshot.val()) {
      let users = [];
      snapshot.forEach(element => {
        if (element.key !== userLogged) {
          users.push({
            key: element.key,
            name: element.val().name,
          });
        }
      });
      // const data = snapshot.val();
      // const arr = Object.keys(data).map(i => {
      //   data[i].id = i;
      //   return data[i];
      // });
      dispatch({
        type: FETCH_ALL_USERS_SUCCESS,
        payload: {users: users},
      });
    } else {
      dispatch({
        type: FETCH_ALL_USERS_FAILED,
        payload: 'No users available.',
      });
    }
  });
};

// export const fetchDrivers = () => (dispatch) => (firebase) => {

//   const {
//     usersRef
//   } = firebase;

//   dispatch({
//     type: FETCH_ALL_USERS,
//     payload: null
//   });

//   usersRef.orderByChild("queue").equalTo(false).once("value", snapshot => {
//     if (snapshot.val()) {
//       const data = snapshot.val();
//       const arr = Object.keys(data)
//       .filter(i => data[i].approved == true && data[i].driverActiveStatus == true && data[i].location)
//       .map(i => {
//         data[i].id = i;
//         return data[i];
//       });
//       dispatch({
//         type: FETCH_ALL_USERS_SUCCESS,
//         payload: arr
//       });
//     } else {
//       dispatch({
//         type: FETCH_ALL_USERS_FAILED,
//         payload: "No users available."
//       });
//     }
//   });
// };

// export const addUser = (userdata) => (dispatch) => (firebase) => {
//   const {
//     usersRef
//   } = firebase;

//   dispatch({
//     type: EDIT_USER,
//     payload: userdata
//   });

//   usersRef.push(userdata).then(() => {
//     dispatch({
//       type: EDIT_USER_SUCCESS,
//       payload: null
//     });
//   }).catch((error) => {
//     dispatch({
//       type: EDIT_USER_FAILED,
//       payload: error
//     });
//   });
// }

// export const editUser = (id, user) => (dispatch) => (firebase) => {

//   const {
//     singleUserRef
//   } = firebase;

//   dispatch({
//     type: EDIT_USER,
//     payload: user
//   });
//   let editedUser = user;
//   delete editedUser.id;
//   singleUserRef(id).set(editedUser).then(() => {
//     dispatch({
//       type: EDIT_USER_SUCCESS,
//       payload: null
//     });
//   }).catch((error) => {
//     dispatch({
//       type: EDIT_USER_FAILED,
//       payload: error
//     });
//   });
// }

// export const deleteUser = (id) => (dispatch) => (firebase) => {

//   const {
//     singleUserRef
//   } = firebase;

//   dispatch({
//     type: DELETE_USER,
//     payload: id
//   });

//   singleUserRef(id).remove().then(() => {
//     dispatch({
//       type: DELETE_USER_SUCCESS,
//       payload: null
//     });
//   }).catch((error) => {
//     dispatch({
//       type: DELETE_USER_FAILED,
//       payload: error
//     });
//   });
// }
