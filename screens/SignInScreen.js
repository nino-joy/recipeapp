import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {
  Text,
  Button,
  FormControl,
  Input,
  Link,
  ScrollView,
  View,
} from 'native-base';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        <Input borderRadius={50} value={email} onChange={setEmail} />
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
          onChange={setPassword}
        />
        <Link
          _text={{fontSize: 'xs', fontWeight: '700', color: 'primary.500'}}
          alignSelf="flex-end"
          mt={1}
          mr={4}>
          Forget Password?
        </Link>
      </FormControl>

      <Button width="80%" borderRadius={40} mt={5}>
        Login
      </Button>

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
