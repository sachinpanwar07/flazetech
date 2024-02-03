import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale, textScale} from '../styles/responsive';
import Colors from '../styles/Colors';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <View>
        <Text
          style={{
            fontSize: textScale(30),
            marginTop: moderateScale(30),
            margin: moderateScale(10),
          }}>
          FlazetechQuiz
        </Text>
       <View style={{justifyContent:'center',alignItems:'center'}}>
       <Image
          source={require('../Images/quizimg.png')}
          style={styles.imageBaner}
        />
       </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('PlayGroundScreen')}
          style={styles.StartButton}>
          <Text> Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  imageBaner: {
    width: moderateScale(300),
    height: moderateScale(300),
    marginTop: moderateScale(150),
    justifyContent:'center',
    alignItems:'center'
  },
  StartButton: {
    backgroundColor: Colors.secondColor,
    width: moderateScale(300),
    height: moderateScale(60),
    justifyContent: 'center',
    alignItems: 'center',
    margin: moderateScale(30),
    borderRadius: moderateScale(10),
    marginTop: moderateScale(120),
  },
});
