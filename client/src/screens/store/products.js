import React, {useState,useEffect} from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import AppStyle from "../../components/AppStyle";



const Products = (props) => {
    return(
        <View style={AppStyle.container}> 
            <Text style={AppStyle.title}>Products Screen</Text>

            <TouchableOpacity style={AppStyle.btn} onPress={() => {props.navigation.navigate('ProductDetails')}}>
                <Text style={AppStyle.btn_text}> Go to ProductDetails </Text>
            </TouchableOpacity>
        </View>
    )
}

export const screenOptions = (navData) => {
    return {
        headerTitle: 'Products'
    }
}

export default Products;