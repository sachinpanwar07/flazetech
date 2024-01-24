import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TextInputCompo from './Components/CustomComponents/TextInputCompo';
import CustomButton from './Components/CustomComponents/CustomButton';
import {moderateScale, moderateScaleVertical, textScale} from '../styles/responsive';
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
        <View style={{flexDirection: 'row',justifyContent:'flex-end',marginHorizontal:moderateScale(14)}}>
          <Text style={{fontSize:textScale(15)}}>Don't have account?</Text>
          <Text style={{fontSize:textScale(15),color:Colors.thirdColor,fontWeight:'bold'}} > signup</Text>
        </View>
        <CustomButton text="login" />
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

    marginTop: moderateScaleVertical(200),
  },
  textViewContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
 
  },
  TextStyle: {
    fontSize: textScale(50),
    color: Colors.thirdColor,
    fontWeight: 'bold',
  },
});
