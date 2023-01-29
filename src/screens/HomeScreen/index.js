import {Text, View, StyleSheet, Button} from 'react-native';

export function HomeScreen({navigation}) {
  function signup() {
    navigation.navigate('SignUp');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>DevChat 1.0</Text>
      <View style={styles.buttonArea}>
        <Button onPress={() => {}} title="SignIn" />
        <Button onPress={() => signup()} title="SignUp" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 30,
    marginBottom: 50,
  },
  buttonArea: {
    width: '80%',
    height: '15%',
    justifyContent: 'space-between',
  },
});
