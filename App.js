import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MainStack from './src/Navigation/MainStack';
const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <MainStack />
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
