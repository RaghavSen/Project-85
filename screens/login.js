import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  Alert,
  ToastAndroid,
  KeyboardAvoidingView
} from "react-native";

import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";
import firebase from "firebase"

const bgImage = require("../assets/background2.png");
const appIcon = require("../assets/appIcon.png");
const appName = require("../assets/appName.png");

export default class LoginScreen extends Component{
  constructor(props){
    super(props);

    this.state = {
     email:"",  
     password:""
    }

  }

  handlelogin = (email,password) =>{
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
        this.props.navigation.navigate("BottomTab")
    })
    .catch(error=>{Alert.alert(error.messsage)})

  }
  
  render(){
    const{email,password} = this.state;


    return(
        <KeyboardAvoidingView behavior="padding" style={styles.container}>

        <ImageBackground source={bgImage} style={styles.bgImage}>
          <View style={styles.upperContainer}>
            <Image source={appIcon} style={styles.appIcon} />
            <Image source={appName} style={styles.appName} />
          </View>
          <View style={styles.lowerContainer}>

               <TextInput 
               onChangeText={text=>this.setState({
                  email:text,

               })}
               placeholder={"enter Email"}
               placeholderTextColor={"white"}
               autoFocus
               />
                  
               <TextInput
                   onChangeText={text=>this.setState({
                    password:text,
                 })}
                 placeholder={"enter Password"}
                 placeholderTextColor={"white"}
                 autoFocus
               />

               <TouchableOpacity
               style={styles.button}
                 onPress={()=>{
                    this.handlelogin(email,password)
                 }}
               >
                <Text style={styles.buttonText}> Login </Text>
               </TouchableOpacity>
            
          </View>
        </ImageBackground>
           </KeyboardAvoidingView>

    );
    
  }
}





const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF"
    },
    bgImage: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    upperContainer: {
      flex: 0.5,
      justifyContent: "center",
      alignItems: "center"
    },
    appIcon: {
      width: 200,
      height: 200,
      resizeMode: "contain",
      marginTop: 80
    },
    appName: {
      width: 80,
      height: 80,
      resizeMode: "contain"
    },
    lowerContainer: {
      flex: 0.5,
      alignItems: "center"
    },
    textinputContainer: {
      borderWidth: 2,
      borderRadius: 10,
      flexDirection: "row",
      backgroundColor: "#9DFD24",
      borderColor: "#FFFFFF"
    },
    textinput: {
      width: "57%",
      height: 50,
      padding: 10,
      borderColor: "#FFFFFF",
      borderRadius: 10,
      borderWidth: 3,
      fontSize: 18,
      backgroundColor: "#5653D4",
      
      color: "#FFFFFF"
    },
    scanbutton: {
      width: 100,
      height: 50,
      backgroundColor: "#9DFD24",
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      justifyContent: "center",
      alignItems: "center"
    },
    scanbuttonText: {
      fontSize: 24,
      color: "#0A0101",
    },
    button: {
      width: "43%",
      height: 55,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F48D20",
      borderRadius: 15
    },
    buttonText: {
      fontSize: 24,
      color: "#FFFFFF",
    }
  });