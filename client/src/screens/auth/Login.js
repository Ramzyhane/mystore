import React,{useState} from "react";
import { View, Text ,TextInput, ActivityIndicator, Image, TouchableOpacity, Alert } from "react-native";
import AppStyle from "../../components/AppStyle";
import AppColors from "../../components/AppColors";
import {auth} from '../../utillis/Firebase-config';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import axios from 'axios';
 
const Login = props =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isLoginView, setIsLoginView] = useState(true);

    const loginAction = async() => {
        if(email !=="" && password !==""){
            try {
                const user = await signInWithEmailAndPassword(auth, email, password);

                
            } catch (error) {
                Alert.alert("Authentication", error.message);
                
            }

        }else{
            Alert.alert("Authentication", "All inputs are required!!!");
        }
    }


    const signupAction = async() => {
        if(email !=="" && password !=="" && firstName !=="" && lastName !==""){
            const api = "http://10.0.0.10:3001/api/products/creatNewAccount";
            try {
                const fbuser = await createUserWithEmailAndPassword(auth, email, password);
               
                const user = {
                    firstName: firstName,
                    lastName: lastName,
                    uid: fbuser.user.uid,
                    email: email,
                    password: password
                   
                }
               
              

                await axios.post(api, {user})
                .then(results =>{
                    console.log(results);
              

                })
                .catch(error => {
                    console.log(error);  
                  })


                
            } catch (error) {
                Alert.alert("Authentication", error.message);
                
            }

        }else{
            Alert.alert("Authentication", "All inputs are required!!!");
        }
    }
    

    return(
        <View style={[AppStyle.container, {backgroundColor:AppColors.purple}]}>
            <Image source={require('../../../assets/fonts/logo.png')} style={AppStyle.logo} />
            {
                isLoginView ? 
                (
                    <View style={AppStyle.forn_container}>
                       <Text style={AppStyle.screen_title}>Ligin</Text>
                       <Text style={AppStyle.screen_context}>Type you email and password to signin</Text>
                       <TextInput style={AppStyle.input}
                          keyboardType='email-address'
                          placeholder='Email address'
                          autoCapitalize='none'
                          value={email}
                          onChangeText={(e) =>{setEmail(e)}}
                          
                       />
                         <TextInput style={AppStyle.input}
                          keyboardType='default'
                          placeholder='Password'
                          autoCapitalize='none'
                          secureTextEntry={true}
                          value={password}
                          onChangeText={(e) =>{setPassword(e)}}
                          
                       />
                       <TouchableOpacity onPress={loginAction} style={[AppStyle.btn, {marginTop:20, height:60}]}>
                        <Text style={AppStyle.btn_text}>sign In</Text>
                       </TouchableOpacity>


                       <TouchableOpacity onPress={() => {setIsLoginView(!isLoginView)}} style={AppStyle.simple_btn}>
                          <Text style={AppStyle.simple_btn_text} >Don't have an account? Creat one now!!</Text>
                       </TouchableOpacity>

                    </View>
                ) 

                :

                (
                    <View style={AppStyle.forn_container}>
                    <Text style={AppStyle.screen_title}>SignUp</Text>
                    <Text style={AppStyle.screen_context}>Type you full name email and password to create new account</Text>

                    <TextInput style={AppStyle.input}
                       keyboardType='default'
                       placeholder='First name'
                      value={firstName}
                      onChangeText={(e) => { setFirstName(e) }}
                    />
                     <TextInput style={AppStyle.input}
                        keyboardType='default'
                        placeholder='Last name'
                        value={lastName}
                       onChangeText={(e) => { setLastName(e) }}
                    />

                    <TextInput style={AppStyle.input}
                       keyboardType='email-address'
                       placeholder='Email address'
                       autoCapitalize='none'
                       value={email}
                       onChangeText={(e) =>{setEmail(e)}}
                       
                    />
                      <TextInput style={AppStyle.input}
                       keyboardType='default'
                       placeholder='Password'
                       autoCapitalize='none'
                       secureTextEntry={true}
                       value={password}
                       onChangeText={(e) =>{setPassword(e)}}
                       
                    />
                    <TouchableOpacity onPress={signupAction} style={[AppStyle.btn, {marginTop:20, height:60}]}>
                     <Text style={AppStyle.btn_text}>sign Up</Text>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => {setIsLoginView(!isLoginView)}} style={AppStyle.simple_btn}>
                       <Text style={AppStyle.simple_btn_text} >Back To login!</Text>
                    </TouchableOpacity>

                 </View>

                )
            }

        </View>
    )
}
export default Login;