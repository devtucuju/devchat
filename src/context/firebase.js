import React, {createContext} from 'react';

import app from 'firebase/app';
import 'firebase/firestore';

const FirebaseContext = createContext(null);

const FirebaseProvider = ({config, children}) => {
  let firebase = {
    app: null,
  };

  if (!app.apps.length) {
    app.initializeApp(config);
    firebase = {
      app: app,
      config: config,
      firestore: app.firestore(),
      firestoreRef: app.firestore(),
    };
  }

  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
};

export {FirebaseContext, FirebaseProvider};
