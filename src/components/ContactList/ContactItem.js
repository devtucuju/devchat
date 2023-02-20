import React from 'react';

import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

export function ContactItem({data, onPress}) {
  function handleClick() {
    onPress(data);
  }
  return (
    <TouchableHighlight
      underlayColor={'#ddd'}
      style={styles.container}
      onPress={handleClick}>
      <Text>{data.name}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: 45,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
