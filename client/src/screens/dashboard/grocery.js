import react, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, Button, Alert,Image,TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; 
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppStyle from "../../components/AppStyle"; 
import axios from "axios";


export default function grocery(props) {
  const[shoping, setShoping]= useState([]);
  const [favorites, setFavorites] = useState([]);
  const [students, setStudents] = useState([]);
  const [isFavoritePressed, setIsFavoritePressed] = useState(false);
  const addtoshopping = (_id) => {
    console.log('shoping:', _id);
    const ApiUrl= "http://10.0.0.8:3001/api/addtoshopping";
    const shopping = {
      ShopId: _id
    }
  
    axios.post(ApiUrl, {shopping})
      .then(res => {
        console.log(res)
        setIsFavoritePressed(true);
        setShoping(prevshoping => [...prevshoping, _id]);
      })
      .catch(er => {
        console.log(er)
        Alert.alert('send to prevshoping', er.message);
      })
  }
  

  const AddtoFavorite = (_id) => {
    console.log('Favorite:', _id);
    const Api_Url= "http://10.0.0.8:3001/api/addtofavorite";
    const favorite = {
      GadetId: _id
    }
  
    axios.post(Api_Url, {favorite})
      .then(res => {
        console.log(res)
        setIsFavoritePressed(true);
        setFavorites(prevFavorites => [...prevFavorites, _id]);
      })
      .catch(er => {
        console.log(er)
        Alert.alert('send to favorites', er.message);
      })
  }
  

  const loadStudents = async() =>{
    const  api_url="http://10.0.0.8:3001/api/getStudent";
    axios.get(api_url)
    .then(result => {
        setStudents(result.data.msg)
        console.log(result.data.msg);
    })
    .catch(error => {
        Alert.alert('GetloadStudents Tools', error.message)
    })
}

useEffect(() =>{
    loadStudents();
},[])
const item = item;
return (
  <View style={AppStyle.container}>
  {students.length > 0 &&
    students.map((item) => (
 
    <TouchableOpacity style={AppStyle.container12} onPress={() => { props.navigation.navigate("One_car", { item }) }}>
    
          <View style={AppStyle.tmcontainer} key={item._id}>
            <View style={AppStyle.tmcontainer}>
              <Text style={AppStyle.name}>Name: {item.FName}</Text>
              <Text style={AppStyle.details}>{item.Details}</Text>
              <Text style={AppStyle.pricell}>Price: {item.price}</Text>
            </View>
            <Image source={{ uri: item.image }} style={AppStyle.image} />
            <TouchableOpacity
              color="#ff0000"
              onPress={() => AddtoFavorite(item._id)}
            >
              <MaterialCommunityIcons
                style={[AppStyle.favoriteButton1]}
                name="heart"
                size={32}
                color={favorites.includes(item._id) ? "red" : "white"}
                onPress={() => AddtoFavorite(item._id)}
              />
            </TouchableOpacity>

            <TouchableOpacity
              color="#ff0000"
              onPress={() => addtoshopping(item._id)}
            >
              <AntDesign
                style={[AppStyle.shoppingiteButton]}
                name="shoppingcart"
                size={40}
                color={shoping.includes(item._id) ? "yellow" : "orange"}
                onPress={() => addtoshopping(item._id)}
              />
            </TouchableOpacity>
          </View>

      
    </TouchableOpacity>

  
    ))}
    </View>
);


}
export const groceryScreen = (navData) => {
  return {
    headerTitle: 'Tools',
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navData.navigation.navigate("FavoritesTab")}
        style={AppStyle.container}
      >
        <MaterialCommunityIcons
          name="heart"
          size={32}
          color="white"
        />
        <TouchableOpacity
          onPress={() => navData.navigation.navigate("StoreTab")}
          style={AppStyle.container}
        >
        <AntDesign
          name="shoppingcart"
          size={40}
          color="orange"
        />
        </TouchableOpacity>
       
      </TouchableOpacity>
      
    ),
  }
}




