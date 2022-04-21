import React from 'react';
import { Entypo } from '@expo/vector-icons'; 
import { View, Text, StyleSheet } from 'react-native';
import StarRating from 'react-native-star-rating';
import { defaulReviewIcon, defaultHorizontalMargin, defaultTextStyle1, defaultVerticalMargin } from '../constants/Styling';

const ReviewBar = ({rating}) =>{
    return <View style={styles.containerStyle}>
        {getStatus(rating)}
        <View style={{flex:1,alignSelf:'center'}}>
        <StarRating
        fullStarColor='green'
        starSize={14}
        disabled={true}
        maxStars={5}
        rating={rating}
      />
        </View>
    </View>
}

const styles = StyleSheet.create({
    containerStyle: {
        ...defaultHorizontalMargin,
        marginVertical: defaultVerticalMargin.marginVertical /2,
        flexDirection: 'row',
        alignItems:'stretch',
        paddingHorizontal: 7
    },
    happyIconStyle: {
       ...defaulReviewIcon,
       color:"#00dd00",
    },
    neutralIconStyle: {
        ...defaulReviewIcon,
        color:"orange",
     },
     sadIconStyle: {
        ...defaulReviewIcon,
        color:"red",
     },
     reviewTextStyle:{
        fontSize: defaultTextStyle1.fontSize * 1.5,
        textAlign: 'center',
        fontWeight: 'bold',
        flex: 3, 
        alignSelf:'center'
     }
});

const getStatus = rating=>{
    let icon = {};
    if(rating>3){
        icon = <Entypo name="emoji-happy" style={styles.happyIconStyle} />
    }else if (rating>1.5 && rating<=3){
        icon = <Entypo name="emoji-neutral" style={styles.neutralIconStyle} />
    }else {
        icon = <Entypo name="emoji-sad" style={styles.sadIconStyle} />
    }

    let text = {};
    if(rating>3){
        text = <Text style={styles.reviewTextStyle}>Very Good</Text>
    }else if (rating>1.5 && rating<=3){
        text = <Text style={styles.reviewTextStyle}>Good</Text>
    }else {
        text = <Text style={styles.reviewTextStyle}>Bad</Text>
    }
    return [icon,text];
}

export default ReviewBar;