import React, {useState,useEffect} from "react";
import {View, Text} from 'react-native';
import AppStyle from "../../components/AppStyle";
import AppColors from "../../components/AppColors";
const Favorites = (props) => {
    return(
        <View style={AppStyle.container}>
            <Text style={[AppStyle.container, { color: AppColors.blue_light,fontSize:30}]}>Favorites Screen</Text>
        </View>
    )
}



export default Favorites;
