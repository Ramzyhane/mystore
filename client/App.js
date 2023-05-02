import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList ,TextInput, Pressable,TouchableOpacity } from 'react-native';

export default function App() {

  const baseUrl = 'http://10.0.0.19:3001/api/';
  const [students, setStudents] = useState([]);
  const [studentNmae, setStudentNmae] = useState("");

  useEffect(() => {
    getData();
  },[]);

  const getData = async() => {
    const url =baseUrl + "products/getStudents";
    const response = await fetch(url, {
      method: 'get'
    });
    const data =await  response.json();
    setStudents(data.message);
  }


const sendmydata = async() => {
  const url = baseUrl + "products/createProduct";
  const response = await fetch(url, {
    method: 'post',
    headers:{
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
      studentNmae: studentNmae
    })
  });
  
  const data =await response.json();
  getData();
}

  return (
    <View style={styles.container}>

        
        <View style={{width:'100%'}}>
          <TextInput 
           value={setStudentNmae}
           onChangeText={(text) => {setStudentNmae(text)}}
            keyboardType="default"
            placeholder='Student Name...'
            style={styles.input}
          
          />

          <TouchableOpacity onPress={sendmydata} style={styles.btn}>
            <Text >Send data to Server</Text>
          </TouchableOpacity>

       {
        students.length > 0 &&    <FlatList 
           data={students}
           keyExtractor={item => item._id}
           renderItem={itemRow => 
           <View style={{width:'100%', padding:20, backgroundColor:'#ffffff',marginTop:10, borderRadius:12}}>  
           <Text>{itemRow.item.studentName}</Text>

           </View>}
        />
       }
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn:{
    width:'100%',
    padding: 20,
    alignItems:"center",
    borderRadius:12,
    marginTop:20,
    backgroundColor:'#00cc99'
  },
  input:{
    width:'100%',
    backgroundColor:'#ffffff',
    padding:12,
    borderRadius:12,
    marginTop:20,
    fontSize:20
  },
  container: {
    padding:30,
    flex: 1,
    backgroundColor: '#0099cc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
