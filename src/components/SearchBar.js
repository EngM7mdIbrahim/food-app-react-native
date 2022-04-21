import React  from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { defaultBorderRadius, defaultSearchIcon, defaultMargin } from "../constants/Styling";
import { defaultPrimaryLightColor } from "../constants/Colors";

const SearchBar = ({
  searchTerm,
  onSearchTextChange,
  onSearchTextSubmitted,
}) => {
  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome name="search" style={styles.iconSize} />
      <TextInput
        onChangeText={onSearchTextChange}
        onSubmitEditing={onSearchTextSubmitted}
        style={styles.inputStyle}
        placeholder="Search"
        value={searchTerm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    ...defaultMargin,
    ...defaultBorderRadius,
    height: 45,
    backgroundColor: "#dddddd",
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    paddingHorizontal: 5,
  },
  iconSize: {
    ...defaultSearchIcon,
    ...defaultPrimaryLightColor,
    alignSelf: "center",
  },
});

export default SearchBar;
