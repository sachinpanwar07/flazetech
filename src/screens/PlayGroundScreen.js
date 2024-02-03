import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Colors from '../styles/Colors';
import data from '/flazetechQuiz/QuizApp/data.json';

const PlayGroundScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const route = useRoute();
  const [score, setScore] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const { category } = route.params;
  const filteredQuestions = getQuestionsByCategory(category);
  const currentQuestion = filteredQuestions[currentQ];
  const checkAnswer = (selectedOption, correctOption) => {
    if (selectedOption === correctOption.toString()) {
      setScore(score + 1);
    }
  };
  
  
  const handleOptionPress = (selectedOption, correctOption) => {
    setSelectedOption(selectedOption);
    checkAnswer(selectedOption, correctOption.toString());
  };
  
  

  const nextQuestion = () => {
    setSelectedOption(null);
    if (currentQ < filteredQuestions.length - 1) {
      setCurrentQ((prevQ) => prevQ + 1);
    }
  };

  useEffect(() => {
    if (currentQ === filteredQuestions.length - 1) {
      // If it's the last question, show the modal
      setModalVisible(true);
    }
  }, [currentQ, filteredQuestions.length]);

  const closeModal = () => {
    setModalVisible(false);
  };

  
console.log("score is:"+score)
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <Text style={styles.categoryText}>{category} Quiz</Text>
        <Text style={styles.categoryText}>{`${currentQ + 1}/${filteredQuestions.length}`}</Text>
      </View>
      <View style={styles.questionContainer}>
        <View style={[styles.questionStyle, { backgroundColor: Colors.secondColor }]}>
          <Text style={[styles.textStyles, { color: Colors.whiteColor }]}>{currentQuestion.question}</Text>
        </View>
        <View style={styles.optionStyle}>
          {Array.from({ length: 4 }, (_, index) => {
            const optionKey = `option${index + 1}`;
            const optionText = currentQuestion[optionKey];

            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.textStyles,
                  selectedOption === optionText
                    ? optionText === currentQuestion.correctOption
                      ? { backgroundColor: Colors.greenColor }
                      : { backgroundColor: Colors.redColor }
                    : { backgroundColor: Colors.whiteColor },
                ]}
                onPress={() => handleOptionPress(optionText, currentQuestion.correctOption)}
              >
                <Text>{optionText}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={() => { nextQuestion(); }}>
        <Text style={styles.nextButtonText}>Next Question</Text>
      </TouchableOpacity>

      {/* Modal for displaying the score */}
      {/* <Modal isVisible={isModalVisible} onBackdropPress={closeModal} animationIn="slideInUp" animationOut="slideOutDown">
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Quiz Completed!</Text>
          <Text style={styles.modalText}>Your Score: {score}/{filteredQuestions.length}</Text>
          <TouchableOpacity style={styles.closeModalButton} onPress={closeModal}>
            <Text style={styles.closeModalButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal> */}
    </View>
  );
};

const getQuestionsByCategory = (category) => {
  return data.filter((item) => item.category === category);
};

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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 6,
    marginBottom: 16,
  },
  optionStyle: {},
  textStyles: {
    fontSize: 18,
    margin: 10,
    fontWeight: 'bold',
    borderRadius: 6,
  },
  nextButton: {
    backgroundColor: Colors.blueColor,
    padding: 16,
    borderRadius: 6,
    marginTop: 16,
    alignItems: 'center',
  },
  nextButtonText: {
    color: Colors.whiteColor,
    fontWeight: 'bold',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  closeModalButton: {
    backgroundColor: Colors.blueColor,
    padding: 16,
    borderRadius: 6,
    alignItems: 'center',
  },
  closeModalButtonText: {
    color: Colors.whiteColor,
    fontWeight: 'bold',
  },
});

export default PlayGroundScreen;
