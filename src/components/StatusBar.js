import React from 'react';
import { View,Text,StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import {  MaterialIcons   } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { defaultHorizontalMargin, defaultIcon, defaultTextStyle1 } from '../constants/Styling';
import { defaultPrimaryLightColor } from '../constants/Colors';

const StatusBar = ({isOpen, isDelivery, price})=>{
    return <View style={styles.containerStyle}>
        <View style={styles.childContainer}>
        <AntDesign name="clockcircleo" style={isOpen ? styles.successStyle: styles.failStyle} />
        <Text style={isOpen ? styles.successTextStyle : styles.failTextStyle}>{isOpen ? 'Open':'Close'}</Text>
        </View>
        {isDelivery ? <View style={styles.childContainer}>
        <MaterialIcons name="delivery-dining" style={isOpen ? styles.successStyle: styles.failStyle} />
        <Text style={styles.successTextStyle}>Delivery</Text>
        </View> : null}
        <View style={styles.childContainer}>
        <FontAwesome5 name="money-bill-wave" style={isOpen ? styles.successStyle: styles.failStyle} />
        <Text style={{...textStyle,...defaultPrimaryLightColor}}>{price}</Text>
        </View>
        
        
        
    </View>
};

export const textStyle ={
    ...defaultTextStyle1,
    fontWeight: 'normal',
    fontSize: 16,
    paddingHorizontal: 10,
    alignSelf: 'center'
}

const styles = StyleSheet.create({
    containerStyle: {
        ...defaultHorizontalMargin,
        flexDirection: 'row',
    },
    successStyle:{
        fontSize:18,
        color:'green'
    },
    failStyle: {
        fontSize: 18,
        color: 'red'
    },
    successTextStyle:{
        ...textStyle,
        color: 'green',
    },
    failTextStyle:{
       ...textStyle,
       color: 'red',
    },
    childContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center'
    }
});



export default StatusBar;