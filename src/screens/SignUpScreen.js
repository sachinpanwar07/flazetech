import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TextInputCompo from './Components/CustomComponents/TextInputCompo'
import CustomButton from './Components/CustomComponents/CustomButton'

const SignUpScreen = () => {
  const[email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  return (
    <View>
      <TextInputCompo 
      value={email}
      placeholder='email'
      onChangeText={value=>setEmail(value)}
      />
      <TextInputCompo 
      value={password}
      placeholder='password'
      onChangeText={value=>setPassword(value)}
      />
      <CustomButton text='Signup'/>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({})