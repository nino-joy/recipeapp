import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {Text, Input} from 'native-base';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const SearchBar = () => {
  return (
    <Input
      placeholder="Search"
      variant="filled"
      width="100%"
      height="40px"
      bg="gray.200"
      borderRadius={20}
      py={1}
      px={2}
      //   InputLeftElement={
      //     <Icon
      //       size="sm"
      //       ml={2}
      //       size={5}
      //       color="gray.400"
      //       as={<Ionicons name="ios-search" />}
      //     />
      //   }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH - 50,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8E8E8',
  },
});

export default SearchBar;
