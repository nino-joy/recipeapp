import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  View,
  Avatar,
  Text,
  IconButton,
  Icon,
  FlatList,
  useToast,
  Spinner,
} from 'native-base';
import {trackPromise, usePromiseTracker} from 'react-promise-tracker';

import FilterIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import RefreshIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import SearchBar from '../components/SearchBar.js';
import RandomRecipe from '../components/RandomRecipe.js';

import {getRandomRecipesInfo} from '../api/functions.js';

const WINDOW_HEIGHT = Dimensions.get('window').height;

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const toast = useToast();
  const {promiseInProgress} = usePromiseTracker();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let res = await trackPromise(getRandomRecipesInfo());
    setData(res);
  };

  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <SafeAreaView style={styles.container}>
      {/* USER INFO AND AVATAR */}
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

      {/* SEARCHBAR AND FILTER ICON */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <SearchBar />
        <IconButton
          variant="solid"
          icon={
            <Icon
              size="sm"
              as={<FilterIcon name="sort-variant" />}
              color="white"
            />
          }
          style={{borderRadius: 50}}
        />
      </View>

      {/* TITLE AND REFRESH BUTTON */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 35,
        }}>
        <Text fontWeight="700" fontSize="2xl">
          Hand-picked for you
        </Text>

        <IconButton
          variant="unstyled"
          icon={
            <Icon size="sm" as={<RefreshIcon name="refresh" />} color="black" />
          }
          style={{
            height: 20,
            width: 20,
            alignSelf: 'center',
          }}
          onPress={() => {
            toast.show({
              title: 'Refreshing...',
              duration: 2000,
              style: {borderRadius: 50},
              status: 'info',
              isClosable: false,
            });
            getData();
          }}
        />
      </View>
      {/* FLATLIST OF RANDOM RECIPES */}
      {promiseInProgress ? (
        <Spinner size="sm" style={{height: 0.23 * WINDOW_HEIGHT}} />
      ) : (
        <FlatList
          data={data}
          horizontal={true}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          style={{
            // borderWidth: 1,
            // borderColor: 'red',
            marginTop: 15,
            flexGrow: 0,
          }}
          ItemSeparatorComponent={() => <View style={{width: 30}} />}
          renderItem={({item}) => (
            <TouchableOpacity key={item.id} onPress={() => {}} style={{}}>
              <RandomRecipe
                title={item.title}
                imageURL={item.image}
                servings={item.servings}
                readyInMinutes={item.readyInMinutes}
              />
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
    // </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
    // borderWidth: 1,
    // borderColor: 'red',
  },
});

export default HomeScreen;
