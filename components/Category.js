import React, {Component, useState,useEffect} from 'react';
import {StyleSheet, Text, Button, TextInput, Image, View} from 'react-native';
import HeaderMenu from './Common/HeaderMenu.js';
import { Card, ListItem, Icon, SearchBar } from 'react-native-elements';
import * as firebase from 'firebase';
import 'firebase/firestore';

const Category=() => {

  const products = [
 {
    name: 'Fruits & Vegetables',
   categoryID:"100"
 },
 {
    name: 'Foodgrains & Masala',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
   categoryID:"101"
 },
 {
    name: 'Bakery, Cakes & Diary',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
   categoryID:"102"
 },
 {
    name: 'Beverages',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
   categoryID:"103"
 },
 {
    name: 'Cleaning & HouseHold',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
   categoryID:"104"
 }

];

 useEffect(() => {
    var firebaseConfig = {
    apiKey: "AIzaSyDGfGCZrdUZFx3XSFn4MY9cMK2xeK7uCNU",
    authDomain: "mycart-943f0.firebaseapp.com",
    databaseURL: "https://mycart-943f0.firebaseio.com",
    projectId: "mycart-943f0",
    storageBucket: "mycart-943f0.appspot.com",
    messagingSenderId: "864847774669",
    appId: "1:864847774669:web:74d64c8c6c9d4e6d09ba84",
    measurementId: "G-G2BF8F80YC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore();

  var oCategories=db.collection('Category').get().then((snapshot)=>{
  snapshot.docs.forEach(doc =>{
    console.log(doc.CategoryName);
  })
  });






  //firebase.analytics();
 });


  
        return(
    <View style={styles.container}>
      <HeaderMenu/>

      <SearchBar
        placeholder="Type Here..."
    
      />
 
  {
    products.map((u, i) => {
      return (
        <View key={i} style={styles.user}>
         <Card title={u.name}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: u.avatar }}
          />
          <Text style={styles.name}>{u.categoryID}</Text>
          </Card>
        </View>
      );
    })
  }

      
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
  user:{
      flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Category;
