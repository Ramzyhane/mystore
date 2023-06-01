import React, {useState,useEffect} from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import AppStyle from "../../components/AppStyle";



const SubCategory = (props) => {
    return(
        <View style={AppStyle.container}> 
            <Text style={AppStyle.title}>
                {props.route.params.car}
            </Text>


            <TouchableOpacity style={AppStyle.btn} onPress={() => {props.navigation.navigate('Products')}}>
                <Text style={AppStyle.btn_text}> Go to Products</Text>
            </TouchableOpacity>
        </View>
    )
}

export const screenOptions = (navData) => {
    return {
        headerTitle: navData.route.params.car
    }
}


export default SubCategory;