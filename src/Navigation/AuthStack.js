

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Signup"
          component={SignUpScreen}
          options={{ title: 'Sign Up' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
