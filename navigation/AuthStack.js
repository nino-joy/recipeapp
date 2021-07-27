import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

function AuthStack() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '25823597002-6in6ooqbsg2p1tolog0cedq6jdsmt3da.apps.googleusercontent.com',
    });
  }, []);
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Sign In" component={SignInScreen} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

export default AuthStack;
