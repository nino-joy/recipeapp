import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import AnimatedTabBar from '@gorhom/animated-tabbar';

import HomeScreen from '../screens/HomeScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SearchScreen from '../screens/SearchScreen';
import RecipeInfoScreen1 from '../screens/RecipeInfoScreen1';

import HomeSVG from '../assets/icons/HomeSVG';
import SearchSVG from '../assets/icons/SearchSVG';
import FavouriteSVG from '../assets/icons/FavouriteSVG';
import SettingsSVG from '../assets/icons/SettingsSVG';

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
      tabBar={props => (
        <AnimatedTabBar tabs={tabs} {...props} preset="bubble" />
      )}
      tabBarOptions={{
        style: {
          borderTopStartRadius: Platform.OS === 'ios' ? 25 : 0,
          borderTopEndRadius: Platform.OS === 'ios' ? 25 : 0,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.3,
          shadowRadius: 7,
        },
      }}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default TabBar;
