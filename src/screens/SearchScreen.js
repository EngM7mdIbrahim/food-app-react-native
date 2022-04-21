import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import { defaultTextStyle1 } from "../constants/Styling";
import useSearchResults from "../hooks/useSearchResults";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, errorMessage, searchApi] = useSearchResults();

  const filterByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        onSearchTextSubmitted={() => searchApi(searchTerm)}
        onSearchTextChange={(newTerm) => setSearchTerm(newTerm)}
        searchTerm={searchTerm}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text style={styles.resultsCountTextStyle}>
        There are {results.length} results!
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResultsList title="Cost Efficient" results={filterByPrice("$")} />
        <ResultsList title="Bit Pricer" results={filterByPrice("$$")} />
        <ResultsList title="Big Spender" results={filterByPrice("$$$")} />

        <View style={{ height: 50 }}></View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  resultsCountTextStyle: {
    ...defaultTextStyle1,
    textAlign: "center",
  },
});

export default SearchScreen;
