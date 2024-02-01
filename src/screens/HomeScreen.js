import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import data from '/flazetechQuiz/QuizApp/data.json'; // Adjust the path accordingly
import Colors from '../styles/Colors';
import {moderateScale, textScale} from '../styles/responsive';

const HomeScreen = () => {
  const navigation = useNavigation();

  const getUniqueCategories = () => {
    const uniqueCategories = [];
    data.forEach(item => {
      if (!uniqueCategories.includes(item.category)) {
        uniqueCategories.push(item.category);
      }
    });
    return uniqueCategories;
  };

  const handleCategoryPress = category => {
    // Navigate to another screen and pass necessary data
    navigation.navigate('PlayGroundScreen', {category});
  };

  const renderItem = ({item}) => (
    <View style={styles.categoryStyle}>
      <TouchableOpacity
        onPress={() => handleCategoryPress(item)}
        style={styles.categoryList}>
        <Text style={styles.categorytextStyle}>{item}</Text>
        <Text style={styles.categorytextStyle}>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );

  const uniqueCategories = getUniqueCategories();

  return (
    <SafeAreaView>
      <Text
        style={{
          fontSize: textScale(25),
          padding: moderateScale(30),
          fontWeight: 'bold',
        }}>
        flazetechQuiz
      </Text>
      <FlatList
        data={uniqueCategories}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  categoryStyle: {
    flex: 1,
  },
  categoryList: {
    backgroundColor: Colors.secondColor,
    margin: moderateScale(12),
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: moderateScale(100),
    borderRadius: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categorytextStyle: {
    padding: moderateScale(12),
    fontSize: textScale(25),
    color: 'white',
    fontWeight: 'bold',

    alignSelf: 'center',
  },
});
