import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
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

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Recipe Info 1" component={RecipeInfoScreen1} />
    </HomeStack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator activeColor="#10b981" barStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({color}) => <HomeSVG size={27} color={color} />,
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color}) => <SearchSVG size={27} color={color} />,
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          tabBarIcon: ({color}) => <FavouriteSVG size={27} color={color} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color}) => <SettingsSVG size={27} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

// gorhom/animated-tabbar [can be added if reanimated updates to v2.0]
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
