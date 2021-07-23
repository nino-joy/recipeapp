import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Text, View, IconButton, Icon, FlatList, Spinner} from 'native-base';

import FilterIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import SearchBar from '../components/SearchBar.js';
import {searchResults} from '../api/functions.js';
import SearchResult from '../components/SearchResult.js';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResultsArray, setSearchResultsArray] = useState([]);

  const getSearchResults = async () => {
    let res = await searchResults(searchTerm);
    setSearchResultsArray(res.results);
    console.log(searchResultsArray);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarRow}>
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          onSubmitEditing={getSearchResults}
        />
        <IconButton
          variant="solid"
          icon={
            <Icon
              size="sm"
              as={<FilterIcon name="sort-variant" />}
              color="white"
            />
          }
          style={{borderRadius: 50}}
        />
      </View>
      {searchResultsArray.length === 0 ? (
        <Spinner size="lg" style={{flex: 1}} />
      ) : (
        <FlatList
          data={searchResultsArray}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{height: 30}} />}
          style={{marginTop: 15}}
          renderItem={({item}) => (
            <SearchResult title={item.title} imageURL={item.image} />
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
  },
  searchBarRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
});

export default SearchScreen;
