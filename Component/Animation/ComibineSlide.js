import React, { useEffect, useState } from 'react';
import {View,Text,Animated} from 'react-native';

const CombineSlide = ()=>{
    const [slide1,setSlide1] = useState(new Animated.Value(-700));
    const [slide2,setSlide2] = useState(new Animated.Value(-700))
    useEffect(()=>{
     const s1=   Animated.timing(
            slide1,{
                toValue:0,
                duration:5000,
                useNativeDriver:false
            }
        )
        const s2 =Animated.timing(
            slide2,{
                toValue:0,
                duration:5000,
                useNativeDriver:false
            }
        )
        Animated.sequence([s1,s2]).start();
    })
    const marginLeft1= slide1;
    const marginLeft2= slide2;
    return(
        <View>
<Animated.View style={{backgroundColor:'green',width:300,height:200,marginLeft:marginLeft1,marginBottom:20}}>
    <Text>Hello World</Text>
</Animated.View>
<Animated.View style={{backgroundColor:'green',width:300,height:200,marginLeft:marginLeft2}}>
    <Text>Hello World</Text>
</Animated.View></View>
    )
}
export default CombineSlide