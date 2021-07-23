import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'native-base';

import {SvgXml} from 'react-native-svg';

const IconAndText = ({icon, text, serving}) => {
  return (
    <View style={styles.container}>
      <SvgXml width="20" height="20" xml={icon} />
      {serving === true && (
        <Text fontSize="sm" color="white" marginLeft={2} fontWeight="200">
          {text} servings
        </Text>
      )}
      {serving === false && (
        <Text fontSize="sm" color="white" marginLeft={2} fontWeight="200">
          {text} minutes
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default IconAndText;
