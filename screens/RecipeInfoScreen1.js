import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, ImageBackground} from 'react-native';
import {Text, Image, View, StatusBar} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

import BackIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const RecipeInfoScreen1 = ({route, navigation}) => {
  const [data, setData] = useState({});

  useEffect(() => {
    retrieveDataFromStore();
  }, []);

  // retrieve data from Async Storage
  const retrieveDataFromStore = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@random_recipes_info');
      const reqJsonValue = JSON.parse(jsonValue);
      if (reqJsonValue !== null) {
        let reqObj = reqJsonValue.filter(item => {
          return item.id === route.params.id;
        });
        setData(reqObj[0]);
      }
    } catch (err) {
      alert('Failed to fetch data from storage');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={{
          uri: `https://spoonacular.com/recipeImages/${data.id}-636x393.jpg`,
        }}
        resizeMode="cover"
        imageStyle={{flex: 1, height: '100%'}}
        style={{
          width: '100%',
          height: '35%',
        }}>
        {/* adding dark shade */}

        <Text mt={'30%'} ml={25} fontSize="3xl" bold={true} color="white">
          {data.title}
        </Text>
      </ImageBackground>

      <BackIcon
        name="chevron-left"
        color="white"
        style={{
          position: 'absolute',
          top: Platform.OS === 'ios' ? 70 : 25,
          left: 25,
        }}
        onPress={navigation.goBack}
        size={40}
      />
      <Text>{route.params.id}</Text>
      <Text>Recipe Info Screen 1</Text>
      <Text>{data.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    // flex: 1,
    backgroundColor: 'rgba(0,0,0,.5)',
    height: '100%',
  },
});

export default RecipeInfoScreen1;
