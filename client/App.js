import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [message, setMessage] = useState("");
  useEffect(() => {
    getData();
  },[]);

  const getData = async() => {
    const url = "http://10.0.0.19:3001/api/products/sayHellow";
    const response = await fetch(url, {
      method: 'get'
    });
    
    const data =await  response.json();
    setMessage(data.message);
    //console.log(data);
  }
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
