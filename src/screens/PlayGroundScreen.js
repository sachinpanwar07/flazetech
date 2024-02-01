// PlayGroundScreen.js
import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useRoute} from '@react-navigation/native';
import data from '/flazetechQuiz/QuizApp/data.json';
import Colors from '../styles/Colors';
import { terminate } from 'firebase/firestore';
import { textScale } from '../styles/responsive';
const PlayGroundScreen = () => {
  const [slectedOption, setSelectedOption] = useState();
  const route = useRoute();
  const {category} = route.params;

  const filteredQuestions = getQuestionsByCategory(category);

  const renderItem = ({item}) => (
    <View style={styles.questionContainer}>
      <View style={styles.questionStyle}>
        <Text style={styles.textStyles}>{item.question}</Text>
      </View>
      <View>
        <View style={styles.optionStyle}>
          <Text  style={styles.textStyles}>{item.option1}</Text>
          <Text style={styles.textStyles}>{item.option2}</Text>
          <Text style={styles.textStyles}>{item.option3}</Text>
          <Text style={styles.textStyles}>{item.option4}</Text>
        </View>
      </View>
      <Text>{item.difficulty}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.categoryText}>
         {category} Quiz
      </Text>
      <FlatList
        data={filteredQuestions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const getQuestionsByCategory = category => {
  return data.filter(item => item.category === category);
};

export default PlayGroundScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  questionContainer: {
    marginBottom: 16,
  },
  questionStyle: {
    backgroundColor: Colors.secondColor,
  },
  optionStyle: {},
  textStyles:{
    fontSize:textScale(18)
  }
});
