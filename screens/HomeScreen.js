import React, {useState, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  View,
  Avatar,
  Text,
  IconButton,
  Icon,
  useToast,
  Spinner,
  FlatList,
} from 'native-base';
import {trackPromise, usePromiseTracker} from 'react-promise-tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import FilterIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import RefreshIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import SearchBar from '../components/SearchBar.js';
import RandomRecipe from '../components/RandomRecipe.js';

import {getRandomRecipesInfo} from '../api/functions.js';
import {AuthContext} from '../navigation/AuthProvider.js';

const WINDOW_HEIGHT = Dimensions.get('window').height;

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const toast = useToast();
  const {promiseInProgress} = usePromiseTracker();

  const {user} = useContext(AuthContext);

  useEffect(() => {
    // getData();
  }, []);

  // gets randomRecipe data and stores it in Async Storage
  const getData = async () => {
    let res = await trackPromise(getRandomRecipesInfo());
    let jsonValue = JSON.stringify(res);
    await AsyncStorage.setItem('@random_recipes_info', jsonValue);
    setData(res);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        {/* USER INFO AND AVATAR */}
        <View
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          mt={15}
          marginX={25}>
          <View>
            <Text fontWeight="200" fontSize="md">
              Good Morning!
            </Text>
            <Text fontWeight="700" fontSize="2xl">
              {user.displayName}
            </Text>
          </View>
          <Avatar
            source={{
              uri: user.photoURL,
            }}></Avatar>
        </View>

        <Text fontSize="2xl" fontWeight="300" my={5} mx={25}>
          What do you wanna cook today?
        </Text>

        {/* SEARCHBAR AND FILTER ICON */}
        <View flexDirection="row" justifyContent="space-between" mx={25}>
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
          flexDirection="row"
          justifyContent="space-between"
          mt={35}
          mx={25}>
          <Text fontWeight="700" fontSize="2xl">
            Hand-picked for you
          </Text>

          <IconButton
            variant="unstyled"
            icon={
              <Icon
                size="sm"
                as={<RefreshIcon name="refresh" />}
                color="black"
              />
            }
            alignSelf="center"
            style={{
              height: 20,
              width: 20,
            }}
            onPress={() => {
              toast.show({
                title: 'Refreshing...',
                duration: 2000,
                status: 'info',
                isClosable: false,
                borderRadius: 15,
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
            mt={15}
            contentContainerStyle={{paddingHorizontal: 25}}
            ItemSeparatorComponent={() => <View width={25} />}
            renderItem={({item}) => (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  navigation.navigate('Recipe Info 1', {id: item.id})
                }
                style={{}}>
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
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'red',
  },
});

export default HomeScreen;
