import React, {useState, useContext} from 'react';
import {SafeAreaView, StyleSheet, Platform} from 'react-native';
import {
  Text,
  Button,
  FormControl,
  Input,
  Link,
  ScrollView,
  View,
  useToast,
} from 'native-base';

import {AuthContext} from '../navigation/AuthProvider';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const {login, googleLogin} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleStyle}>
        <Text fontSize="4xl" color="primary.500" bold="true">
          Welcome
        </Text>
        <Text color="muted.400" fontSize="md">
          Sign in to continue!
        </Text>
      </View>

      <FormControl>
        <FormControl.Label
          _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>
          Email ID
        </FormControl.Label>
        <Input
          borderRadius={50}
          value={email}
          onChangeText={value => setEmail(value)}
          autoCapitalize="none"
        />
      </FormControl>

      <FormControl mt={5} mb={5}>
        <FormControl.Label
          _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>
          Password
        </FormControl.Label>
        <Input
          type="password"
          borderRadius={50}
          value={password}
          onChangeText={setPassword}
        />
        <Link
          _text={{fontSize: 'xs', fontWeight: '700', color: 'primary.500'}}
          alignSelf="flex-end"
          mt={1}
          mr={4}>
          Forgot Password?
        </Link>
      </FormControl>

      <Button
        width="80%"
        borderRadius={40}
        mt={5}
        onPress={() => login(email, password)}>
        Login
      </Button>

      {Platform.OS === 'android' && (
        <Link
          mt={10}
          _text={{color: 'primary.500', bold: true}}
          onPress={googleLogin}>
          Continue with Google
        </Link>
      )}

      <View style={{flexDirection: 'row', marginTop: 40}}>
        <Text color="muted.700" fontWeight={400}>
          Don't have an account?
        </Text>
        <Link
          ml={2}
          _text={{color: 'primary.500', bold: true}}
          onPress={() => navigation.navigate('Sign Up')}>
          Sign Up
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 25,
  },
  titleStyle: {
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SignInScreen;
