import React, {createContext} from 'react';

import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';

import {
  fetchUser,
  mainSignUp,
  mobileSignIn,
  facebookSignIn,
  appleSignIn,
  signOut,
  updateProfile,
  clearLoginError,
  updatePushToken,
  updateProfileImage,
  requestPhoneOtpDevice,
  deleteUser,
  validateReferer,
  checkUserExists,
  monitorProfileChanges,
  fetchProfile,
  checkLogin,
} from '../store/actions/authactions';

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
      api: {
        checkLogin: () => dispatch => checkLogin()(dispatch)(firebase),
      },
    };
  }

  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
};

export {FirebaseContext, FirebaseProvider};
