import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import AppStyle from '../../components/AppStyle';

const   Gr = (props) => {
  const [FName, setFName] = useState('');
  const [LName, setLName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImag] = useState('');

  const createNemStudent = async () => {
    if (FName !== '' && LName !== '' && price !== '' && image !== '') {
      const api_url = 'http://10.70.0.18:3001/api/create';
      const student = {
        FName: FName,
        LName: LName,
        price: price,
        image: image,
      };

      try {
        const response = await axios.post(api_url, { student });
        const createdGrocery = response.data.msg;

        Alert.alert(
          'Create grocery',
          `Hello ${createdGrocery.FName}, your ID is: ${createdGrocery._id}`
        );

        setFName('');
        setLName('');
        setPrice('');
        setImag('');
      } catch (error) {
        Alert.alert('Create gr grocery', error.message);
      }
    } else {
      Alert.alert('Create gr grocery', 'All inputs are required');
    }
  };

  return (
    <View style={AppStyle.container}>
      <TextInput 
           style={AppStyle.input}
           placeholder="The Name"
           keyboardType="default"
           autoCapitalize="none"
           value={FName}
           onChangeText={(text) =>(setFName(text))}
        
        />
        <TextInput 
           style={AppStyle.input}
           placeholder="Tha Last"
           keyboardType="default"
           autoCapitalize="none"
           value={LName}
           onChangeText={(text) =>(setLName(text))}
        
        />
          <TextInput 
           style={AppStyle.input}
           placeholder="price"
           keyboardType="default"
           autoCapitalize="none"
           value={price}
           onChangeText={(text) =>(setPrice(text))}
        
        />
         <TextInput 
          
           style={AppStyle.input}
           placeholder="image"
           keyboardType="default"
           autoCapitalize="none"
           value={image}
           onChangeText={(text) =>(setImag(text))}
          />

        <TouchableOpacity style={AppStyle.button} onPress={createNemStudent}>
          <Text style={AppStyle.buttonText}>Create new grocery</Text>
        </TouchableOpacity>

        <TouchableOpacity style={AppStyle.button} onPress={() => { props.navigation.navigate('grocery') }}>
          <Text style={AppStyle.buttonText}>GO TO Grocery</Text>
        </TouchableOpacity>
      </View>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: 'Gr',
  };
};

export default Gr;
