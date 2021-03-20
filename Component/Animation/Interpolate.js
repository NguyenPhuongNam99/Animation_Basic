import React, { useEffect, useState } from 'react';
import {View,Text,Animated} from 'react-native';

const Interpolate =()=>{
   const [s1,s2] = useState(new Animated.Value(0))
   useEffect(()=>{
      const first= Animated.timing(
           s1,{
               toValue:1,
               duration:5000,
               useNativeDriver:false
           }
       )
       const second= Animated.timing(
        s1,{
            toValue:0,
            duration:5000,
            useNativeDriver:false
        }
    )
  const loop=  Animated.sequence([first,second]);
  Animated.loop(loop).start();
   })
   const backgroundColor= s1.interpolate({
       inputRange:[0,1],
       outputRange:['green','orange']
   })
    return(

        <Animated.View style={{backgroundColor,width:300,height:200}}>
            <Text>Hello WOrld</Text>
        </Animated.View>
    )
}
export default Interpolate