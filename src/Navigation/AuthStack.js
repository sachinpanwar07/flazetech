// AuthStack.js

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, SignUpScreen} from '../screens';

const AuthStack = (Stack) => {
  return (
   <>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: 'Login'}}
      />
      <Stack.Screen
        name="Signup"
        component={SignUpScreen}
        options={{title: 'Sign Up'}}
      />
</>
  );
};

export default AuthStack;
