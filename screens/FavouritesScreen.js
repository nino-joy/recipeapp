import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'native-base';

const FavouritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Fovourite Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FavouritesScreen;
