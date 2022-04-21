import React from "react";
import { View, Text, StyleSheet } from "react-native";
import useGetRestaurant from "../hooks/useGetRestaurant";
import Slideshow from "react-native-image-slider-show";
import {
  defaultHorizontalLineStyle,
  defaultHorizontalMargin,
  defaultMargin,
  defaultMarginBottom,
  defaultMarginTop,
  defaultTextStyle1,
} from "../constants/Styling";
import StatusBar from "../components/StatusBar";
import ReviewBar from "../components/ReviewBar";
import { defaultPrimaryLightColor } from "../constants/Colors";

const RestaurantScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [restaurant, getRestaurant] = useGetRestaurant(id);

  if (!restaurant) {
    return (
      <View>
        <Text style={styles.loadingTextStyle}>Loading ... </Text>
      </View>
    );
  }
  console.log(restaurant);
  return (
    <View>
      <Slideshow dataSource={restaurant.photos} />

      <Text style={styles.resaturantNameStyle}>{restaurant.name}</Text>
      <Text style={styles.categoryStyle}>
        {getCategories(restaurant.categories)}
      </Text>
      <StatusBar
        isOpen={!restaurant.is_closed}
        isDelivery={restaurant.transactions.includes('delivery')}
        price={restaurant.price}
      />
      <View style={styles.horizontalLineStyle}/>
      <ReviewBar rating={restaurant.rating}/>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingTextStyle: {
    ...defaultTextStyle1,
    textAlign: "center",
    marginTop: 50,
  },
  resaturantNameStyle: {
    ...defaultMarginTop,
    ...defaultHorizontalMargin,
    fontSize: 30,
    fontWeight: "bold",
  },
  categoryStyle: {
    ...defaultHorizontalMargin,
    ...defaultMarginBottom,
    fontSize: 15,
  },
  horizontalLineStyle: defaultHorizontalLineStyle
});

const getCategories = (categories) => {
  return categories
    .map((value) => {
      return value.title;
    })
    .toString().replaceAll(',',', ');
};

export default RestaurantScreen;
