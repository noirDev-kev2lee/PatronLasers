import {StyleSheet, View} from 'react-native';
import React from 'react';

const Line = () => {
  return (
    <View style={styles.lineContainer}>
      <View style={styles.line} />
    </View>
  );
};

export default Line;

const styles = StyleSheet.create({
  lineContainer: {
    paddingVertical: 8,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#DADADA',
  },
});
