import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TextInputCompo from './Components/CustomComponents/TextInputCompo';
import CustomButton from './Components/CustomComponents/CustomButton';
import {moderateScaleVertical, textScale} from '../styles/responsive';
import Colors from '../styles/Colors';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.Container}>
      <View style={styles.textViewContainer}>
        <Text style={styles.TextStyle}>QUIZE </Text>
      </View>
      <View style={styles.InputButtonContainer}>
        <TextInputCompo
          value={email}
          placeholder="Email"
          onChangeText={value => setEmail(value)}
        />
        <TextInputCompo
          value={password}
          placeholder="password"
          onChangeText={value => setPassword(value)}
        />
        <CustomButton text="signUp" />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
   
  },

  InputButtonContainer: {
    flex: 1,
    borderWidth: 2,
    marginTop:moderateScaleVertical(200)
  },
  textViewContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:2
  },
  TextStyle: {
    fontSize: textScale(50),
    color: Colors.thirdColor,
    fontWeight: 'bold',
  },
});
