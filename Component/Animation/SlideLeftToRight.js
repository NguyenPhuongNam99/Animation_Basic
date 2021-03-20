import React, { useEffect, useState } from 'react';
import {View,Text,Animated} from 'react-native';

const SlideLeftToRight = ()=>{
    const [leftTo,setLeftTo] = useState(new Animated.Value(-700));
    const marginLeft = leftTo;
    useEffect(()=>{
        Animated.timing(
            leftTo,{
                toValue:0,
                duration:5000, 
                useNativeDriver: false

            }
        ).start();
    })
    
    return(

        <Animated.View style={{backgroundColor:'yellow',width:300,height:200,marginLeft:marginLeft}}>
                <Text>hello World</Text>
        </Animated.View>
    )
}
export default SlideLeftToRight