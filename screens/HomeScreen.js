import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Avatar, Text} from 'native-base';

import SearchBar from '../components/SearchBar.js';

import randomRecipe from '../api/functions.js';

const HomeScreen = () => {
  const getData = async () => {
    let data = await randomRecipe();
    setTitle(data.recipes[0].title);
    // console.log(data);
  };

  useEffect(() => {
    // getData();
  }, []);

  const [title, setTitle] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 15,
        }}>
        <View>
          <Text fontWeight="200" fontSize="md">
            Good Morning!
          </Text>
          <Text fontWeight="700" fontSize="2xl">
            John Doe
          </Text>
        </View>
        <Avatar
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
          }}></Avatar>
      </View>

      <Text fontSize="2xl" fontWeight="300" marginTop={5} marginBottom={5}>
        What do you wanna cook today?
      </Text>

      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
    // borderWidth: 1,
    borderColor: 'red',
  },
});

export default HomeScreen;
