import {FirebaseProvider} from './src/context/firebase';
import {firebaseConfig} from './src/config/firebaseConfig';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

import {Home} from './src';
import {Preload} from './src/screens/Preload';

export default function App() {
  return (
    <Provider store={store}>
      <FirebaseProvider config={firebaseConfig}>
        <Preload />
      </FirebaseProvider>
    </Provider>
  );
}
