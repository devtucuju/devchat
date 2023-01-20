import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

export function Preload() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Carregando...</Text>
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
