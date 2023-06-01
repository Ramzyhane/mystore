import React, {useState,useEffect} from "react";
import {View, Text} from 'react-native';
import AppStyle from "../../components/AppStyle";


const Settings = () => {
    return(
        <View style={AppStyle.container}> 
            <Text style={AppStyle.title}>Settings Screen</Text>
        </View>
    )
}

export default Settings;