import React, {useState,useEffect} from "react";
import {View, Text, TextInput, TouchableOpacity,Alert,Image} from 'react-native';
import axios from "axios";
import AppStyle from "../../components/AppStyle";


const Settings = () => {

    const [FName, setFName] = useState("");
    const [LName, setLName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImag] = useState("");


    

    const createNemStudents  = async () => {
        if (FName !== "" && LName !== "" && price !== "" && image !== "" ) {
          const api_url = "http://10.70.0.18:3001/api/create";
          const student = {
            FName: FName,
            LName: LName,
            price: price,
            image: image,
          };
      
          try {
            const response = await axios.post(api_url, { student });
            const createdStudent = response.data.msg;
 
      
            Alert.alert(
              'Create student',
              `Hello ${createdStudent.FName}, your ID is: ${createdStudent._id}`,

            );
      
            setFName("");
            setLName("");
            setPrice("");
            setImag("");

          } catch (error) {
            Alert.alert('Create student', error.message);
          }
        } else {
          Alert.alert('Create student', 'All inputs are required');
        }
      };


    return(
       <>
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
          
        <TouchableOpacity style={AppStyle.btn} onPress={createNemStudents}>
            <Text style={AppStyle.btn_text}>Creat new Student</Text>
        </TouchableOpacity>
        
       </View>
       </>
    )
}


export default Settings;