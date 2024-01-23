import {View, Text} from 'react-native';
import React from 'react';

import DrawerNavigator from './DrawerNavigator';
import * as Screens from '../screens';
export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={'Drawer'}
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
    </>
  );
}
