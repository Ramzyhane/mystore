import React, {useState,useEffect} from "react";
import {View, Text, Button} from 'react-native';
import AppStyle from "../../components/AppStyle";
import {auth} from '../../utillis/Firebase-config';
import {signOut} from 'firebase/auth';
import axios from "axios";
import {Avatar} from 'react-native-paper';
import AppColors from "../../components/AppColors";

const Dashboard = () => {
    const user = auth.currentUser;
    const [data, setData] = useState(null);

    useEffect(() => {
        getUserData();
    },[]);

    const getUserData = async () => {
        const api = `http://10.0.0.10:3001/api/products/getMyDetails`;
        try {
            const user = { uid: auth.currentUser.uid };
            const response = await axios.post(api, { user });
            setData(response.data.message);
        } catch (error) {
            console.log(error);
        }
        
    }
    

    return(
        <View style={AppStyle.container}>
           {
            data && (
                <>
                 <Avatar.Image source={{uri: data.avatar}} size={150} />
                   <Text style={AppStyle.title}>{data.firstName} {data.lastName}</Text>
                   <Text style={[AppStyle.screen_context, {color:AppColors.gray_70, marginTop:0}]}>{user.email} </Text>
                   <Button title="Logout" onPress={() => signOut()} />
                
                </>
            )
           } 
           
        </View>
    )
}

export default Dashboard;