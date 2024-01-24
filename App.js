import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AuthStack from './src/Navigation/AuthStack'
import { HomeScreen, LoginScreen, SignUpScreen } from './src/screens';
import Routes from './src/Navigation/Routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MainStack from './src/Navigation/MainStack';
import {firestore} from './config'
const App = () => {
  return (
   <GestureHandlerRootView style={{flex:1}}>
   <MainStack/>
   {/* <LoginScreen/> */}
   {/* <SignUpScreen/> */}
   {/* <AuthStack/> */}
   {/* <Routes/> */}

   {/* <HomeScreen/> */}
   
   </GestureHandlerRootView>
   
   
  );
};

export default App;

const styles = StyleSheet.create({});
