import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Button} from 'native-base';
import {AuthContext} from '../navigation/AuthProvider';

const SettingsScreen = () => {
  const {logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Button
        width="30%"
        borderRadius={40}
        onPress={logout}
        backgroundColor="red.600">
        Logout
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SettingsScreen;
