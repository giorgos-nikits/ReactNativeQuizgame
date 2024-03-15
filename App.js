import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen';
import {NavigationContainer} from '@react-navigation/native';

export default function App({navigation}) {

  const [currentQuestion, setCurentQuestion] = useState(0);

  const [score, setScore] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const quizData = [
    {
      question: 'What is the capital of India?',
      options: ['Chandigarh', 'Goa', 'Delhi', 'Shimla'],
      answer: 'Delhi'
    },
    {
      question: 'Largest animal in the world?',
      options: ['Elephant', 'Blue whale', 'Hippopotamus', 'iragge'],
      answer: 'Blue whale'
    },
    {
      question: 'What is the capital of Greece?',
      options: ['Athens', 'kamilari', 'Crete', 'Thessaloniki'],
      answer: 'Athens'
    },
    {
      question: 'What year was i born?',
      options: ['1999', '2024', '1975', '2001'],
      answer: '2001'
    }
  ]

  const handleAnswer = (selectedAnswer) => {
    const answer = quizData[currentQuestion]?.answer;
    if(answer === selectedAnswer){
      setScore((prevScore)=> prevScore + 1)
    }

    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < quizData.length){
      setCurentQuestion(nextQuestion);
    }else{
      setShowScore(true);
    }

  }

  const handleRestart = () => {
    setCurentQuestion(0);
    setScore(0);
    setShowScore(false);
  }

  return (
    
    <View style={styles.container}>
      {showScore ? <View>
        <Text style={styles.optionStyle}>{score}</Text>
        <TouchableOpacity style={styles.optionContainer}>
          <Text style={styles.resetButton} onPress={handleRestart}>
            Reset
          </Text>
        </TouchableOpacity>
      </View> :
      <View style={styles.questionContainer}>
        <Text style={styles.Question}>
          {quizData[currentQuestion]?.question}
        </Text>
        {quizData[currentQuestion]?.options.map((item) => {
          return <TouchableOpacity onPress={() => handleAnswer(item)} style={styles.optionContainer}>
            <Text style={styles.optionStyle}> {item} </Text>
          </TouchableOpacity>
        })}


      </View>
      }
     
    </View>
    
   

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionContainer:{
    backgroundColor: '@DDDDDD',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  optionStyle:{
    color: 'green',
    padding: 5,
    alignSelf: 'center',
    fontSize:20,
  },
  optionContainer:{
    borderColor: 'black',
    borderWidth:2,
    marginTop:15,

  },
  Question:{
    fontSize:24,
  },
  resetButton:{
    fontSize: 18,
    paddingHorizontal:10,
  }
});
