import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, Button, Alert, Image, TouchableOpacity } from 'react-native';
import AppStyle from "../../components/AppStyle";
import axios from "axios";

export default function Cars(props) {
  const [students, setStudents] = useState([]);

  const loadStudents = async () => {
    const api_url = "http://10.70.0.18:3001/api/getStudent";
    axios.get(api_url)
      .then(result => {
        setStudents(result.data.msg)
        console.log(result.data.msg);
      })
      .catch(error => {
        Alert.alert('GetloadStudents1 student', error.message)
      })
  }

  useEffect(() => {
    loadStudents();
  }, [])

  return (
    <View>
      {students.length > 0 &&
        students.map((item) => (
          <View style={AppStyle.container} key={item._id}>
            <TouchableOpacity style={AppStyle.container12} onPress={() => { props.navigation.navigate("One_car", { item }) }}>
              <View style={AppStyle.tmcontainer}>
                <Image source={{ uri: item.image }} style={AppStyle.image} />
                <View style={AppStyle.detailsContainer}>
                  <Text style={AppStyle.name}>Name: {item.FName}</Text>
                  <Text style={AppStyle.details}>{item.Details}</Text>
                  <Text style={AppStyle.pricell}>Price: {item.price}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ))}
    </View>
  );
}

export const screenOptions = (navData) => {
  return {
    headerTitle: 'cars',
  }
}
