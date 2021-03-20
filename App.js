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
import SlideLeftToRight from './Component/Animation/SlideLeftToRight';
import AnimationOpacity from './Component/Animation/AnimationOpacity';
import CombineSlide from './Component/Animation/ComibineSlide';
import Interpolate from './Component/Animation/Interpolate';
import Transform from './Component/Animation/Transform';

const App = () => {
  
  return (
  //  <AnimationOpacity />
  // <SlideLeftToRight />
  // <CombineSlide />
    // <Interpolate />
    <Transform />
  );
};

const styles = StyleSheet.create({
  
});

export default App;
