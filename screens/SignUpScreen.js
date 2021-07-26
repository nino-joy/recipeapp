import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Text, FormControl, Input, Link, Button, View} from 'native-base';

const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text fontSize="3xl" color="primary.500" bold="true" mb={10}>
        Sign Up
      </Text>

      <FormControl>
        <FormControl.Label
          _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>
          Email ID
        </FormControl.Label>
        <Input borderRadius={50} />
      </FormControl>

      <FormControl mt={5} mb={5}>
        <FormControl.Label
          _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>
          Password
        </FormControl.Label>
        <Input type="password" borderRadius={50} />
      </FormControl>

      <FormControl mb={5}>
        <FormControl.Label
          _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>
          Confirm Password
        </FormControl.Label>
        <Input type="password" borderRadius={50} />
      </FormControl>
      <Button width="80%" borderRadius={40} mt={5}>
        Sign Up
      </Button>
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
});

export default SignUpScreen;
