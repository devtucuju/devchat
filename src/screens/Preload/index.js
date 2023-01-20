import {useContext, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FirebaseContext} from '../../context/firebase';

export function Preload() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const {api} = useContext(FirebaseContext);
  const {checkLogin} = api;

  useEffect(() => {
    dispatch(checkLogin());
  }, []);

  return (
    <View style={styles.container}>
      <Text>Carregando...{auth.status}</Text>
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
