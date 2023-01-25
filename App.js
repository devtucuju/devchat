import 'react-native-gesture-handler';
import {FirebaseProvider} from './src/context/firebase';
import {firebaseConfig} from './src/config/firebaseConfig';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

import {Router} from './src/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <FirebaseProvider config={firebaseConfig}>
        <Router />
      </FirebaseProvider>
    </Provider>
  );
}
