import React, { useState } from 'react';
import { SafeAreaView, View, TextInput,FlatList,Text } from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../consts/colors';

const SearchBar = () => {
        const [searchText, setSearchText] = useState('');
        const [results, setResults] = useState([]);
      
        const allWords = ["Logo", "AppName", "numtel", "Salut, Caissier"];
      
        const handleSearch = (text) => {
          setSearchText(text);
          const matchingWords = [];
          allWords.forEach((word) => {
            if (word.includes(text)) {
              matchingWords.push(word);
            }
          });
          setResults(matchingWords);
        };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white }}>
      <View style={styles.inputContainer}>
        <Icon name="search" size={28} color="#ffa500" />
        <TextInput
          style={{ marginLeft: 10, width: 400, fontSize: 18 }}
          placeholder="Recherche..."
          onChangeText={handleSearch}
          value={searchText}
        />
      </View>
      {results.length > 0 && (
        <FlatList
          data={results}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item) => item}
        />
      )}
    </SafeAreaView>
  );
};

export default SearchBar;
