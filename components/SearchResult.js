import React from 'react';
import {StyleSheet, Dimensions, ImageBackground} from 'react-native';
import {Text, View} from 'native-base';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const SearchResult = ({title, imageURL}) => {
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
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: WINDOW_HEIGHT * 0.15,
    width: WINDOW_WIDTH - 50,
  },
  content: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 15,
  },
});

export default SearchResult;
