import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, Button, Alert, Image, TouchableOpacity } from 'react-native';
import AppStyle from "../../components/AppStyle";
import axios from "axios";


export default function grocery(props) {
  const [studentss, setStudentss] = useState([]);
  const loadStudents = async () => {
    const api_ur = "http://10.0.0.8:3001/api/getStudent";
    axios.get(api_ur)
      .then(result => {
        setStudentss(result.data.msg)
        console.log(result.data.msg);
      })
      .catch(error => {
        Alert.alert('GetloadStudents student', error.message)
      })
  }

  useEffect(() => {
    loadStudents();
  }, [])
  return (
    <View style={AppStyle.container}>
      <TouchableOpacity style={AppStyle.container12} onPress={() => { props.navigation.navigate("One_car") }}>

        {studentss.length > 0 &&
          studentss.map((item) => (
            <View style={AppStyle.tmcontainer} key={item._id}>
              <Image source={{ uri: item.image }} style={AppStyle.image} />
              <View style={AppStyle.detailsContainer}>
                <Text style={AppStyle.name}>Name: {item.FName}</Text>
                <Text style={AppStyle.details}>{item.Details}</Text>
                <Text style={AppStyle.pricell}>Price: {item.price}</Text>
              </View>

            </View>

          ))}
      </TouchableOpacity>

    </View>
  );

}

export const screenOptions = (navData) => {
  return {
    headerTitle: 'Grocery',
    headerRight: () => (
      <MaterialCommunityIcons
        onPress={() => { Alert.alert('Hello from Nav') }}
        name="plus-circle-outline"
        color={AppColors.red}
        size={32}

      />
    )
  }
}
