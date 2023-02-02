import React, {useEffect, useContext} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FirebaseContext} from '../../context/firebase';

export function SignUpScreen({navigation}) {
  const {name, email, password, status} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const {api} = useContext(FirebaseContext);
  const {changeEmail, changeName, changePassword, signUp} = api;

  useEffect(() => {
    if (status === 1) {
      Keyboard.dismiss();
      navigation.navigate('Chat');
    }
  }, [status]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={text => dispatch(changeName(text))}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => dispatch(changeEmail(text))}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={text => dispatch(changePassword(text))}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(signUp(name, email, password))}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '80%',
    height: 48,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    marginVertical: 8,
  },
  button: {
    width: '80%',
    backgroundColor: '#4f83cc',
    padding: 12,
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
