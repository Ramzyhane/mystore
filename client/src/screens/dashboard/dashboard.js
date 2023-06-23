import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert,Image } from "react-native";
import AppStyle from "../../components/AppStyle";
import { auth } from "../../utillis/Firebase-config";
import { signOut } from "firebase/auth";
import axios from "axios";
import { Avatar } from "react-native-paper";
import AppColors from "../../components/AppColors";

const Dashboard = (props) => {
  const user = auth.currentUser;
  const [data, setData] = useState(null);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const api = `http://10.70.0.102:3001/api/products/getMyDetails`;
    try {
      const user = { uid: auth.currentUser.uid };
      const response = await axios.post(api, { user });
      setData(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <View style={AppStyle.container}>
      <Text style={[AppStyle.title,{marginBottom:20, alignSelf: 'flex-start'}]}>Dashboard Screen</Text>

      <TouchableOpacity
        style={[AppStyle.btn,{backgroundColor:AppColors.yellow,  marginBottom: 10}]}
        onPress={() =>{props.navigation.navigate('to')}}
      >
        <Text style={AppStyle.btn_text}> מכולת</Text>
         

      </TouchableOpacity>

      <TouchableOpacity
        style={[AppStyle.btn, { backgroundColor: AppColors.blue , marginBottom: 10 }]}
        onPress={() =>{props.navigation.navigate('cars')}}
      >
        <Text style={AppStyle.btn_text}>מכוניות</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[AppStyle.btn, { backgroundColor: AppColors.green, marginBottom: 10 }]}
        onPress={() =>{props.navigation.navigate('gr')}}
      >
        <Text style={AppStyle.btn_text}>גדג'טים </Text>
      </TouchableOpacity>
      
    </View>
  );
};

export const screenOptio = (navData) => {
  return {
      headerTitle: 'Main',
    
  }
} 

export default Dashboard;
