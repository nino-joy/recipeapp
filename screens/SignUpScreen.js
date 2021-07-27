import React, {useState, useContext} from 'react';
import {Platform, SafeAreaView, StyleSheet} from 'react-native';
import {
  View,
  Text,
  FormControl,
  Input,
  Link,
  Button,
  IconButton,
  Icon,
} from 'native-base';

import {AuthContext} from '../navigation/AuthProvider';
import BackIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const {register} = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <BackIcon
        name="chevron-left"
        style={{
          position: 'absolute',
          top: Platform.OS === 'ios' ? 70 : 25,
          left: 0,
        }}
        onPress={() => navigation.goBack()}
        size={40}
      />
      <Text fontSize="3xl" color="primary.500" bold="true" mb={10}>
        Sign Up
      </Text>

      <FormControl>
        <FormControl.Label
          _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>
          Email ID
        </FormControl.Label>
        <Input
          borderRadius={50}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
      </FormControl>

      <FormControl mt={5} mb={5}>
        <FormControl.Label
          _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>
          Password
        </FormControl.Label>
        <Input
          // type="password"
          borderRadius={50}
          value={password}
          onChangeText={setPassword}
        />
      </FormControl>

      <FormControl mb={5}>
        <FormControl.Label
          _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>
          Confirm Password
        </FormControl.Label>
        <Input type="password" borderRadius={50} />
      </FormControl>
      <Button
        width="80%"
        borderRadius={40}
        mt={5}
        onPress={() => register(email, password)}>
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
