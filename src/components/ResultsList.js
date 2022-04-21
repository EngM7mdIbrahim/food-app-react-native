import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import ResultsListItem from "./ResultListItem";
import { withNavigation } from "react-navigation";

const ResultsList = ({ title, results, navigation }) => {
  return (
    <View>
      <Text style={styles.textStyle}>{title}</Text>
      {results.length != 0 ? (
        <FlatList
          data={results}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(result) => result.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Restaurant",{
                  id: item.id
                })}
              >
                <ResultsListItem result={item} />
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        <Text
          style={{ alignSelf: "center", textAlign: "center", fontSize: 20 }}
        >
          No restaurants are available in this category
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    marginVertical: 5,
    marginHorizontal: 10,
    fontWeight: "bold",
  },
});

export default withNavigation(ResultsList);
