import React from "react";
import { View, Text, Image, ScrollView } from 'react-native';
import AppStyle from "../../components/AppStyle";

const Sho = ({ route }) => {
  const { item } = route.params;

  return (
    <ScrollView>
      <View style={AppStyle.container}>
        <View style={AppStyle.tmcontainer} key={item && item._id}>
          <View style={AppStyle.detailsContainer}>
            <Text style={AppStyle.name}>Name: {item && item.FName}</Text>
            <Text style={AppStyle.details}>{item && item.Details}</Text>
            <Text style={AppStyle.pricell}>Price: {item && item.price}</Text>
          </View>
          <Image source={{ uri: item && item.image }} style={AppStyle.image} />
        </View>
      </View>
    </ScrollView>
  );
}

export default Sho;
