import React from 'react';
import {StyleSheet, View, ImageBackground, Dimensions} from 'react-native';
import {Text} from 'native-base';

import IconAndText from './IconAndText';
import timer from '../assets/icons/ui-icons/timer.js';
import serving from '../assets/icons/ui-icons/serving.js';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const RandomRecipe = ({imageURL, title, readyInMinutes, servings}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: imageURL,
        }}
        resizeMode="cover"
        style={{
          flex: 1,
        }}
        imageStyle={{borderRadius: 15}}>
        {/* ADDING DARKNESS TO THE VIEW */}
        <View style={styles.content}>
          <Text fontWeight="800" fontSize="2xl" color="white">
            {title}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <IconAndText icon={timer} text={readyInMinutes} serving={false} />
            <IconAndText icon={serving} text={servings} serving={true} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 0.65 * WINDOW_WIDTH,
    height: 0.23 * WINDOW_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.5)',
    justifyContent: 'space-between',
    padding: 15,
    paddingVertical: 35,
    borderRadius: 15,
  },
});

export default RandomRecipe;
