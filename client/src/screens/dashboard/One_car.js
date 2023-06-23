import React, { useEffect, useState } from "react";
import { View, Text, Image,Alert ,TouchableOpacity} from 'react-native';
import AppStyle from "../../components/AppStyle";


const Sho = (props) => {
  const [students, setStudents] = useState([]);

  return (
    
    <View style={AppStyle.container}>
      
          <View style={AppStyle.tmcontainer} key={item._id}>
            <Image source={{ uri: item.Image }} style={AppStyle.image} />
            <View style={AppStyle.detailsContainer}>
              <Text style={AppStyle.name}>Name: {item.FName}</Text>
              <Text style={AppStyle.details}>{item.Details}</Text>
              <Text style={AppStyle.pricell}>Price: {item.price}</Text>
            </View>
          </View>
        
    </View>
  );
}

export const screenOptio = (navData) => {
  return {
      headerTitle: 'ons',
    
  }
} 
export default Sho;
