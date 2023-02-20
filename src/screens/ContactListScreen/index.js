import {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FirebaseContext} from '../../context/firebase';

export function ContactListScreen({navigation}) {
  const {uid} = useSelector(state => state.auth);
  const {users} = useSelector(state => state.userdata);
  const dispatch = useDispatch();
  const {api} = useContext(FirebaseContext);
  console.log(users);
  useEffect(() => {
    dispatch(api?.getUsers());
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <View>
            <Text>
              {item.key}- {item.name}
            </Text>
          </View>
        )}
      />
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
