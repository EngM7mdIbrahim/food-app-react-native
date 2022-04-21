import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { defaultBorderLightColor, defaultPrimaryBackgroundLightColor, defaultSecondaryLightColor } from "../constants/Colors";
import { card, defaultBorderRadius, defaultBorderWidth, defaultHorizontalPadding, defaultMargin, defaultMarginBottom, defaultMarginStart, defaultPadding, defaultPaddingBottom, defaultVerticalMargin, DEFAULT_IMAGE } from "../constants/Styling";

const ResultsListItem = ({ result }) => {
  return (
    <View style={styles.containerStyle}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />

      <Text style = {styles.primaryTextStyle}> {result.name} </Text>

      <Text style = { styles.secondaryTextStyle}> {result.rating} Stars, {result.review_count} Reviews </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    imageStyle: {
      ...defaultVerticalMargin,
      ...defaultBorderRadius,
        width: 250,
        height: 120,
    },
    primaryTextStyle: {
        marginBottom: defaultMarginBottom.marginBottom /2,
        fontSize: 14,
        fontWeight: 'bold'
    },
    secondaryTextStyle: {
      ...defaultSecondaryLightColor
    },
    containerStyle:{
      ...defaultMarginStart,
      ...defaultVerticalMargin,
      ...defaultHorizontalPadding,
      ...defaultBorderRadius,
      ...card,
      ...defaultPrimaryBackgroundLightColor,
      ...defaultPaddingBottom,

      paddingHorizontal: defaultHorizontalPadding.paddingHorizontal /2
    }
});

export default ResultsListItem;
