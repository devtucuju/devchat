import {useContext} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FirebaseContext} from '../../context/firebase';

export function SignUpScreen() {
  const {email, password} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const {api} = useContext(FirebaseContext);
  const {checkLogin} = api;
  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput style={styles.input} value={email} onChangeText={() => {}} />
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
