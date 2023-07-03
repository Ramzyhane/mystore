import React, {useState,useEffect} from "react";
import {View, Text,TouchableOpacity, FlatList,Alert,Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
import axios from "axios";
import AppStyle from "../../components/AppStyle";
import AppColors from "../../components/AppColors";


export default Favorites = (props) => {
  const [favorite, setfavorite] = useState([]);

 const loadfavorites = async () => {
   const apiUrl = `http://10.0.0.8:3001/api/loadfavorites`;
     try {
       const response = await axios.get(apiUrl);
       setfavorite(response.data.msg);
       console.log(response.data.msg);
       Alert.alert('Get fav');
     } catch (error) {
       Alert.alert('Geerv', error.message);
     }
   };
 
   useEffect(() => {
     loadfavorites(favorite);
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
       data={favorite}
       numColumns={2}
       renderItem={renderItem}
       
     />
   </View>
    

 )
}
