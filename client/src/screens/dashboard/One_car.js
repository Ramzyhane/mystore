import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from 'react-native';
import AppStyle from "../../components/AppStyle";

const Sho = (props) => {
  const [students, setStudents] = useState([]);

  return (
    <ScrollView>
      <View style={AppStyle.container}>
        <View style={AppStyle.tmcontainer} key={props.item &&props.item._id}>
          <View style={AppStyle.detailsContainer}>
            <Text style={AppStyle.name}>Name: {props.item && props.item.FName}</Text>
            <Text style={AppStyle.details}>{props.item && props.item.Details}</Text>
            <Text style={AppStyle.pricell}>Price: {props.item && props.item.price}</Text>
          </View>
          <Image source={{ uri: props.item && props.item.image }} style={AppStyle.image} />
        </View>
      </View>
    </ScrollView>
  );
}

export const screenOptions = (navData) => {
  return {
    headerTitle: 'ons',
  }
}

export default Sho;
