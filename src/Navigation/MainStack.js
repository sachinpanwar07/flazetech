import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PlayGroundScreen from '../screens/PlayGroundScreen';

const Stack = createNativeStackNavigator();
export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name="PlayGroundScreen"
          component={PlayGroundScreen}
          options={{ headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
