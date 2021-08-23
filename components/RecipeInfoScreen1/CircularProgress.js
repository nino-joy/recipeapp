import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {View, Text} from 'native-base';
import ProgressCircle from 'react-native-progress-circle';

const WINDOW_WIDTH = Dimensions.get('window').width;

const CircularProgress = ({value, label}) => {
  return (
    <View alignItems="center">
      <ProgressCircle
        percent={value}
        radius={35}
        borderWidth={8}
        color="#10b981"
        shadowColor="#defff5"
        bgColor="#fff">
        <Text style={{fontSize: 18}}>{`${value}%`}</Text>
      </ProgressCircle>
      <Text mt={3} fontSize="sm">
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CircularProgress;
