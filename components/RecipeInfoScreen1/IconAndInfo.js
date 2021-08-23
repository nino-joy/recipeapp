import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'native-base';

import {SvgXml} from 'react-native-svg';

const IconAndInfo = ({icon, text}) => {
  return (
    <View flexDirection="row" alignItems="center">
      <SvgXml width={25} height={25} xml={icon} fill="#10b981" />
      <Text ml={2}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IconAndInfo;
