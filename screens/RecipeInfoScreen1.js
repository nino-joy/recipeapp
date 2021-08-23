import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import {Text, View, Image, FlatList, ScrollView} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

import IconAndInfo from '../components/RecipeInfoScreen1/IconAndInfo';

import BackIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FavouriteIcon from 'react-native-vector-icons/AntDesign';
import calories from '../assets/icons/ui-icons/calories';
import health from '../assets/icons/ui-icons/health';
import serving from '../assets/icons/ui-icons/serving';
import CircularProgress from '../components/RecipeInfoScreen1/CircularProgress';

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

      <View style={styles.shadow}>
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
      </View>

      {/* <Text>{data.id}</Text> */}

      <ScrollView style={{paddingBottom: 20}}>
        <View mx={25} mt={6} flexDirection="row" justifyContent="space-between">
          <IconAndInfo
            icon={calories}
            // text={`${data.nutrition.nutrients[0].amount}`}
          />
          <IconAndInfo icon={health} text="sample" />
          <IconAndInfo icon={serving} text={`${data.servings} servings`} />
        </View>

        <View flexDirection="row" mt={12} px={25} justifyContent="space-around">
          <CircularProgress
            value={data.spoonacularScore}
            label="Spoonacular Score"
          />
          <CircularProgress value={data.healthScore} label="Health" />
        </View>

        {/* INGREDIENTS */}
        <Text ml={25} mt={10} bold fontSize="xl">
          Ingredients
        </Text>

        <FlatList
          data={data.extendedIngredients}
          keyExtractor={item => Math.random()}
          horizontal
          nestedScrollEnabled={true}
          style={{marginTop: 20}}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 25}}
          ItemSeparatorComponent={() => <View width={30} />}
          renderItem={({item}) => (
            <View alignItems="center" flex>
              <Image
                source={{
                  uri: `https://spoonacular.com/cdn/ingredients_250x250/${item.image}`,
                }}
                resizeMode="contain"
                alt="ingredient image"
                style={{height: 100, width: 100}}
              />
              <Text fontSize="sm" fontWeight="400">
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Text>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 7,
  },
});

export default RecipeInfoScreen1;
