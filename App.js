import React , {useState} from 'react';
import Login from './Components/Login.js';
import {StyleSheet,View} from 'react-native';

export default function App() {
 
  return (

     <View style={styles.container}>
  
   <Login/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
