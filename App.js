import {FirebaseProvider} from './src/context/firebase';
import {firebaseConfig} from './src/config/firebaseConfig';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

import {Home} from './src';

export default function App() {
  return (
    <Provider store={store}>
      <FirebaseProvider config={firebaseConfig}>
        <Home />
      </FirebaseProvider>
    </Provider>
  );
}
