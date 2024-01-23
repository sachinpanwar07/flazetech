// Drawer.js

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../screens/Profile';
import AboutUsScreen from '../screens/AboutUsScreen';
import AuthStack from './AuthStack';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="AuthStack">
      <Drawer.Screen
        name="AuthStack"
        component={AuthStack}
        options={{ drawerLabel: 'Authentication' }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ drawerLabel: 'Profile' }}
      />
      <Drawer.Screen
        name="AboutUs"
        component={AboutUsScreen}
        options={{ drawerLabel: 'About Us' }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
