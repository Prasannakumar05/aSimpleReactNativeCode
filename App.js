import React from "react";
import {View,Text,StyleSheet,Image } from "react-native";
import NameText from "./src/components/NameText.js";

export default class App extends React.Component {
  render(){
    return(
      <View style={styles.container}>
       
        <Image source={require ("./src/image/email.png") }
        />
         <NameText name="Prasanna"/>
        <NameText name="Kumar"/>
        <Image source={{
          uri:"https://images.pexels.com/photos/2267563/pexels-photo-2267563.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        } }
        style={styles.image}
        />
        
        

        </View>
         );
   }
}
 const styles = StyleSheet.create(
   {
     container: {
       flex: 2 ,
       backgroundColor: "#2B2B52",
       alignItems: "center",
       justifyContent: "center"

     },
     image:{
       width:300,
       height:300,
       
     }
     
   }
 );