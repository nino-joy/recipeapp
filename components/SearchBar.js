import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {Text, Input, Icon} from 'native-base';
import SearchIcon from 'react-native-vector-icons/AntDesign';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const SearchBar = ({value, onChange, onSubmitEditing}) => {
  return (
    <Input
      value={value}
      onChangeText={onChange}
      onSubmitEditing={onSubmitEditing}
      placeholder="Find recipes"
      variant="filled"
      width="80%"
      height="40px"
      bg="gray.200"
      borderRadius={20}
      py={0}
      px={2}
      InputLeftElement={
        <Icon
          size="sm"
          ml={2}
          size={5}
          color="gray.400"
          as={<SearchIcon name="search1" />}
          style={{marginLeft: 13}}
        />
      }
    />
  );
};

const styles = StyleSheet.create({});

export default SearchBar;
