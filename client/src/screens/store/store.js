import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TextInput, Button, Alert, Image, TouchableOpacity } from 'react-native';
import axios from "axios";
import AppStyle from "../../components/AppStyle";

export default Store=(props)=>{
  const [shoping, setShoping] = useState([]);

  const loadShopping = async () => {
    const apiUrl = `http://10.0.0.8:3001/api/loadShopping`;
    try {
      const response = await axios.get(apiUrl);
      setShoping(response.data.msg);
      console.log(response.data.msg);
      Alert.alert('Save ...');
    } catch (error) {
      Alert.alert('loadShopping', error.message);
    }
  };

  useEffect(() => {
    loadShopping(shoping);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => { props.navigation.navigate('One_car', { item }) }}>
      <View style={AppStyle.container}>
      <View style={AppStyle.tmcontainer} key={item._id}>
            <View style={AppStyle.tmcontainer}>
              <Text style={AppStyle.name}>Name: {item.FName}</Text>
              <Text style={AppStyle.details}>{item.Details}</Text>
              <Text style={AppStyle.pricell}>Price: {item.price}</Text>
            </View>
            <Image source={{ uri: item.image }} style={AppStyle.image} />
          </View>
          
          </View> 
 </TouchableOpacity>
      
    )
  return(
      <View style={AppStyle.container}>
      <FlatList
        data={shoping}
        numColumns={2}
        renderItem={renderItem}
      />
    </View>
     
 
  )
 }
 

