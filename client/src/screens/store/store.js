import React, {useState,useEffect} from "react";
import {View, Text, TouchableOpacity,Alert} from 'react-native';
import AppStyle from "../../components/AppStyle";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppColors from "../../components/AppColors";




const Store = (props) => {
    return(
        <View style={AppStyle.container}> 
            <Text style={AppStyle.title}>Store Screen</Text>

            <TouchableOpacity style={AppStyle.btn} onPress={() => {props.navigation.navigate('SubCategory',{car:'Cubra'})}}>
                <Text style={AppStyle.btn_text}> Go to Sym-Categories</Text>
            </TouchableOpacity>
        </View>
    )
}

export const screenOptions = (navData) => {
    return {
        headerTitle: 'Categories',
        headerRight: () => (
            <MaterialCommunityIcons 
            onPress={()=>{Alert.alert('Hello from Nav')}}
               name="plus-circle-outline"
               color={AppColors.yellow}
               size={32}
            />

        )
    }
}

export default Store;