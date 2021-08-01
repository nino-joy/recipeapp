import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SearchScreen from '../screens/SearchScreen';
import RecipeInfoScreen1 from '../screens/RecipeInfoScreen1';

import HomeSVG from '../assets/icons/HomeSVG';
import SearchSVG from '../assets/icons/SearchSVG';
import FavouriteSVG from '../assets/icons/FavouriteSVG';
import SettingsSVG from '../assets/icons/SettingsSVG';

import {AntDesign} from 'react-native-vector-icons/AntDesign';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Recipe Info 1" component={RecipeInfoScreen1} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabBar() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#10b981',
        labelStyle: {
          fontFamily: 'Poppins-medium',
          fontSize: 12,
        },
        style: {
          position: 'absolute',
          bottom: 25,
          left: 25,
          right: 25,
          borderWidth: 0.5,
          borderTopWidth: 0.5,
          borderRadius: 15,
          shadowColor: '#000000',
          // shadowOpacity: 0.7,
          // // shadowRadius: 2,
          // shadowOffset: {
          //   height: 0,
          //   width: 0,
          // },
          // elevation: 4,
        },
      }}

      // tabBarOptions={{
      //   style: {
      //     position: 'absolute',
      //     bottom: 25,
      //     left: 25,
      //     right: 25,
      //     borderRadius: 15,
      //     // backgroundColor: 'red',
      //     // borderTopStartRadius: Platform.OS === 'ios' ? 25 : 0,
      //     // borderTopEndRadius: Platform.OS === 'ios' ? 25 : 0,
      //   },
      // }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const tabs = {
  Home: {
    labelStyle: {
      color: '#fff',
    },
    icon: {
      component: HomeSVG,
      activeColor: '#fff',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: '#10b981',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  Search: {
    labelStyle: {
      color: '#fff',
    },
    icon: {
      component: SearchSVG,
      activeColor: '#fff',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: '#10b981',
      inactiveColor: 'rgba(247,215,243,0)',
    },
  },
  Favourites: {
    labelStyle: {
      color: '#fff',
    },
    icon: {
      component: FavouriteSVG,
      activeColor: '#fff',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: '#10b981',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
  Settings: {
    labelStyle: {
      color: '#fff',
    },
    icon: {
      component: SettingsSVG,
      activeColor: '#fff',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: '#10b981',
      inactiveColor: 'rgba(251,239,211,0)',
    },
  },
};

export default TabBar;
