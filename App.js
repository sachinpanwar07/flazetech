import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
 import AuthStack from './src/Navigation/AuthStack'
import { LoginScreen, SignUpScreen } from './src/screens';
import Routes from './src/Navigation/Routes';
const App = () => {
  return (
   <View>
   {/* <LoginScreen/>
   <SignUpScreen/> */}
   {/* <AuthStack/> */}
   <Routes/>
   </View>
  );
};

export default App;

const styles = StyleSheet.create({});
