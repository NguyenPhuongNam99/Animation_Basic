/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useEffect, useState } from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,Animated
 } from 'react-native';
 
 
 
 const AnimationOpacity = () => {
   const [fadeAdmin,setFadeAdmin] = useState(new Animated.Value(0));
   const opacity = fadeAdmin;
   useEffect(()=>{
     Animated.timing(
       fadeAdmin,{  
         toValue:0.5,
         duration:100,
         useNativeDriver: true 
       }
       
       
     ).start();
   })
   return (
    <Animated.View style={{width:300,height:200,backgroundColor:'green',opacity}}>
       <Text style={{color:'blue'}}>Nam Khoa</Text>
    </Animated.View>
      
   );
 };
 
 const styles = StyleSheet.create({
   
 });
 
 export default AnimationOpacity;
 