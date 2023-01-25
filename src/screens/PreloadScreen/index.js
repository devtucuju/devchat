import {useContext, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FirebaseContext} from '../../context/firebase';

export function PreloadScreen({navigation}) {
  const status = useSelector(state => state.auth.status);
  const dispatch = useDispatch();
  const {api} = useContext(FirebaseContext);
  const {checkLogin} = api;

  const directPages = () => {
    switch (status) {
      case 1:
        navigation.reset({
          index: 0,
          routes: [{name: 'Register'}],
        });
        break;
      case 2:
        navigation.reset({
          index: 0,
          routes: [{name: 'Home'}],
        });
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    dispatch(checkLogin());
    directPages();
  }, []);

  useEffect(() => {
    directPages();
  }, [status]);

  return (
    <View style={styles.container}>
      <Text>Carregando...{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
