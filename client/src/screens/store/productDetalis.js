import React, {useState,useEffect} from "react";
import {View, Text} from 'react-native';
import AppStyle from "../../components/AppStyle";



const ProductDetails = (props) => {
    return(
        <View style={AppStyle.container}> 
            <Text style={AppStyle.title}>ProductDetails Screen</Text>
        </View>
    )
}

export const screenOptions = (navData) => {
    return {
        headerTitle: 'Details'
    }
}


export default ProductDetails;