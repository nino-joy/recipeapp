import React from 'react';
import {StyleSheet, View, Dimensions, Platform} from 'react-native';
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
      autoCorrect={false}
      autoCapitalize="none"
      autoCompleteType="off"
      blurOnSubmit={true}
      placeholder="Find recipes"
      variant="filled"
      width="80%"
      height="40px"
      bg="gray.200"
      borderRadius={20}
      px={3}
      pb={Platform.OS === 'android' ? 1 : null}
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
