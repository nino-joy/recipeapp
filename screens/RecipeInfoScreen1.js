import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import {Text, Image, View, StatusBar} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

import BackIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FavouriteIcon from 'react-native-vector-icons/AntDesign';

const WINDOW_WIDTH = Dimensions.get('window').width;

const RecipeInfoScreen1 = ({route, navigation}) => {
  const [data, setData] = useState({});
  const [fav, setFav] = useState(false);

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
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle="light-content" /> */}

      <View
        flexDirection="row"
        mt={15}
        mx={25}
        alignItems="center"
        justifyContent="space-between">
        <BackIcon name="chevron-left" onPress={navigation.goBack} size={40} />
        <Text fontSize="xl" bold width={WINDOW_WIDTH / 1.9} textAlign="center">
          {data.title}
        </Text>
        <FavouriteIcon
          name={fav ? 'heart' : 'hearto'}
          onPress={() => (!fav ? setFav(true) : setFav(false))}
          size={25}
        />
      </View>

      <Image
        source={{
          uri: data.image,
        }}
        resizeMode="cover"
        mx={25}
        mt={8}
        alt="image"
        height={200}
        borderRadius={15}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RecipeInfoScreen1;
