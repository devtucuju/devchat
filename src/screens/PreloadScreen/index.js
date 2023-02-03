import {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FirebaseContext} from '../../context/firebase';

export function PreloadScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(true);
  const status = useSelector(state => state.auth.status);
  const dispatch = useDispatch();
  const {api} = useContext(FirebaseContext);
  const {checkLogin} = api;

  const directPages = () => {
    switch (status) {
      case 1:
        setIsLoading(false);
        navigation.reset({
          index: 0,
          routes: [{name: 'SignUp'}],
        });
        break;
      case 2:
        setIsLoading(false);
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
    directPages();
    dispatch(checkLogin());
  }, [status]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
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
