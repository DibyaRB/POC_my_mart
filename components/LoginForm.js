import React , {useState } from "react";
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity,Button } from "react-native";



const LoginForm = (props) => {
const state = {userName: '',Password: ''}
const [userName , setUserName] = useState('');
const [Password , setPassword] = useState('');
const [message , setMessage] = useState('');
getUserName = (uname)=>{
setUserName(uname);

}

getPassword = (pass)=>{
setPassword(pass)
}
const navigateToCategories = () =>{  
    if(userName == 'admin' && Password == 'test123' ){
        props.property.navigation.navigate({routeName:'Categories'});
        setMessage('');
        setUserName('');
        setPassword('');
    }
    else{
        setMessage('Please check userID and Password');
    }
    
}
  return (
    <View style={styles.container}>
     <TextInput style={styles.inputbox} underlineColorAndroid="rgba(0,0,0,0)" placeholder="Username / Email / Phone" placeholderTextColor="black" onChangeText={getUserName} />
     <TextInput style={styles.inputbox} underlineColorAndroid="rgba(0,0,0,0)" secureTextEntry={true} placeholder="Password" placeholderTextColor="black" onChangeText={getPassword} />
     <TouchableOpacity style={styles.button} onPress={navigateToCategories}>
         <Text style={styles.buttonText}>Login</Text>
     </TouchableOpacity>
  <Text style={styles.title}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
},
inputbox:{
width:300,
height:50,
backgroundColor:'#e8eae4',
borderRadius:5,
color:'black',
marginTop:10,
textAlign:'center',
opacity:0.9

},
buttonText:{
    fontSize:16,
    fontWeight:'500',
    color:'white',
    marginTop:5,
    textAlign:'center'
},
button:{
backgroundColor : '#696c66',
width:300,
height:30,
borderRadius:25,
marginVertical:10
},
title:{
    color:'black',
    fontSize:20,
    textAlign:'center',
    marginTop:'40%',
    opacity:0.9
  }
});

export default LoginForm;
