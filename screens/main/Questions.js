import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import StyleConstants from '../../StyleConstants';

import {
  getNextQuestions,
  generateFakeQuestions,
  substituteFakeForRealQuestion,
  processAnswer,
  stopUser,
} from '../../controllers/questions/questionActions';

import QuestionnaireWithOptions from '../../Views/questions/QuestionnaireWithOptions';

//temp
import tempquestions from '../../tempAssets/questions.json';

const Questions = props => {
  const [questions, setQuestions] = useState(tempquestions);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [nextYes, setNextYes] = useState({});
  const [nextNo, setNextNo] = useState({});
  const [firstLoad, setFirstLoad] = useState(true);
  const [uiBlocker, setUiBlocker] = useState(false);

  useEffect(() => {
    if (firstLoad) {
      onFirstLoad();
    }
  });

  const getQuestions = async () => {
    setUiBlocker(true);
    let questions = await getNextQuestions();
    setNextYes(questions.data.yes);
    setNextNo(questions.data.no);
    setCurrentQuestion(questions.data.currentQuestion);
    setUiBlocker(false);
    return questions.data.currentQuestion;
  };

  const onFirstLoad = async () => {
    // Toggle firstLoad
    setFirstLoad(false);
    // Get the number of questions that need to be asked
    let numbQuestions = props.navigation.state.params.numbQuestions;
    // Generate fake questions to feed to questionnaire
    let fakeQuestions = generateFakeQuestions(numbQuestions);
    // Get the first question
    let firstQuestion = await getQuestions();
    // Change the first fake question into the real question
    let alteredQuestions = substituteFakeForRealQuestion(
      fakeQuestions,
      firstQuestion,
      0,
    );
    setQuestions(alteredQuestions);
  };

  const onAnswerQuestion = async (answer, questionIndex) => {
    setUiBlocker(true);
    // Determine whether to show the yes or no follow up question
    let alteredQuestions = '';
    let nextQuestion = nextNo;
    // Copy currentQuestion so that it is not possible to send the wrong question to the backend
    let questionAnswered = JSON.parse(JSON.stringify(currentQuestion));

    if (answer === 0) {
      nextQuestion = nextYes;
    }
    // Check if user needs to be stopped
    stopUser(nextQuestion, props.navigation);
    // Show the correct next question
    alteredQuestions = substituteFakeForRealQuestion(
      questions,
      nextQuestion,
      questionIndex + 1,
    );
    setQuestions(alteredQuestions);
    // Do advies logic on backend
    let processedAnswer = await processAnswer(
      nextQuestion,
      questionAnswered,
      answer,
    );
    // Get next questions
    getQuestions();
  };

  const onFinishQuestions = answers => {
    props.navigation.navigate('Feed');
  };

  return (
    <View style={questionStyles.screenStyle}>
      <Image
        source={require('../../assets/Logo/logo.png')}
        style={StyleConstants.logoSizes.medium}></Image>
      <View style={questionStyles.questionnaireWrapper}>
        <QuestionnaireWithOptions
          blockNavigation={uiBlocker}
          onFinish={answers => {
            onFinishQuestions(answers);
          }}
          onAnswer={(answer, index) => onAnswerQuestion(answer, index)}
          questions={questions}></QuestionnaireWithOptions>
      </View>
    </View>
  );
};

const questionStyles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: StyleConstants.colors.white,
  },
  questionnaireWrapper: {
    backgroundColor: StyleConstants.colors.blue.dark,
    width: '100%',
    flex: 1,
  },
});

export default Questions;
