import {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FirebaseContext} from '../../context/firebase';

export function ChatListScreen({navigation}) {
  const {status, uid} = useSelector(state => state.auth);
  const {activeChat} = useSelector(state => state.chatdata);
  const {users} = useSelector(state => state.userdata);

  const dispatch = useDispatch();
  const {api} = useContext(FirebaseContext);
  const {checkLogin} = api;

  useEffect(() => {
    if (activeChat !== '') {
      navigation.navigate('ChatSingle');
    }
  }, [activeChat]);

  return (
    <View style={styles.container}>
      <Text>
        <FlatList
          data={users}
          renderItem={() => {
            return <Text>...</Text>;
          }}
        />
      </Text>
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
