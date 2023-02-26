import {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ContactItem} from '../../components/ContactList/ContactItem';
import {FirebaseContext} from '../../context/firebase';

export function ContactListScreen({navigation}) {
  const {uid} = useSelector(state => state.auth);
  const {users} = useSelector(state => state.userdata);
  const dispatch = useDispatch();
  const {api} = useContext(FirebaseContext);

  useEffect(() => {
    dispatch(api?.getUsers());
  }, []);

  function handleContact(item) {
    dispatch(api?.addChat(item.key));
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <ContactItem data={item} onPress={handleContact} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
