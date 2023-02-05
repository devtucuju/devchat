import {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {FirebaseContext} from '../../context/firebase';

export function SettingsScreen() {
  const navigation = useNavigation();
  const {status, uid} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const {api} = useContext(FirebaseContext);
  const {signOut} = api;

  function handlelogout() {
    dispatch(signOut());

    navigation.reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  }

  return (
    <View style={styles.container}>
      <Text>SETTINGS</Text>
      <TouchableOpacity style={styles.button} onPress={handlelogout}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
