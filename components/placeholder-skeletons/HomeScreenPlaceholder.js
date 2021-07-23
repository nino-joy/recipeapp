import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {View, Text, Spinner} from 'native-base';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default function HomeScreenPlaceholder() {
  return (
    <View style={styles.container}>
      <Spinner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WINDOW_HEIGHT,
    height: 0.23 * WINDOW_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
});
