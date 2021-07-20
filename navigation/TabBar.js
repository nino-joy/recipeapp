import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AnimatedTabBar from '@gorhom/animated-tabbar';

import HomeScreen from '../screens/HomeScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SearchScreen from '../screens/SearchScreen';

import HomeSVG from '../assets/icons/HomeSVG';
import SearchSVG from '../assets/icons/SearchSVG';
import FavouriteSVG from '../assets/icons/FavouriteSVG';
import SettingsSVG from '../assets/icons/SettingsSVG';

const tabs = {
  Home: {
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: HomeSVG,
      activeColor: 'rgba(91,55,183,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(223,215,243,1)',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  Search: {
    labelStyle: {
      color: '#C9379D',
    },
    icon: {
      component: SearchSVG,
      activeColor: 'rgba(201,55,157,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(247,215,243,1)',
      inactiveColor: 'rgba(247,215,243,0)',
    },
  },
  Favourites: {
    labelStyle: {
      color: '#1194AA',
    },
    icon: {
      component: FavouriteSVG,
      activeColor: 'rgba(17,148,170,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(207,235,239,1)',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
  Settings: {
    labelStyle: {
      color: '#E6A919',
    },
    icon: {
      component: SettingsSVG,
      activeColor: 'rgba(230,169,25,1)',
      inactiveColor: 'rgba(0,0,0,1)',
    },
    background: {
      activeColor: 'rgba(251,239,211,1)',
      inactiveColor: 'rgba(251,239,211,0)',
    },
  },
};

const Tab = createBottomTabNavigator();

function TabBar() {
  return (
    <Tab.Navigator
      tabBar={props => (
        <AnimatedTabBar tabs={tabs} {...props} preset="bubble" />
      )}
      tabBarOptions={{
        style: {
          borderTopStartRadius: 25,
          borderTopEndRadius: 25,
          // backgroundColor: 'black',
          // marginHorizontal: 25,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.3,
          shadowRadius: 7,
        },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default TabBar;
