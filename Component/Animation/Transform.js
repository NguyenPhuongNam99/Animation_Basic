import React, { useEffect, useState } from 'react';
import {View,Text,Animated} from 'react-native';

const Transform =()=>{
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
   const rotate= s1.interpolate({
       inputRange:[0,0.5,1],
       outputRange:['15deg','20deg','6deg']
   })
    return(

        <Animated.View style={{transform:[{rotate}],backgroundColor:'green',width:300,height:200,justifyContent:'center',alignItems:'center'}}>
            <Text>Hello WOrld</Text>
        </Animated.View>
    )
}
export default Transform