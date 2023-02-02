import {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FirebaseContext} from '../../context/firebase';

export function ChatScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(true);
  const status = useSelector(state => state.auth.status);
  const dispatch = useDispatch();
  const {api} = useContext(FirebaseContext);
  const {checkLogin} = api;

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Chat</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
