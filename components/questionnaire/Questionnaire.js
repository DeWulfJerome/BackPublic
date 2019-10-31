import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import ProgressBar from './progressBar/ProgressBar';
import QuestionCard from './questionCard/QuestionCard';
import Nav from './nav/Nav';

const Questionnaire = props => {
  const questionsAndAnswers = props.questions;
  //keep track of current question internally
  const [questionIndex, setQuestionIndex] = useState(0);
  //Holds all the indexes answers the user has given
  const [answerArray, setAnswerArray] = useState([]);
  //Holds the index of the currently selected answer for the current question
  const [currentAnswer, setCurrentAnswer] = useState(null);

  //Go to previous question
  const navBack = () => {
    //Take the last answer out of the answer array
    let newAnswerArray = answerArray;
    newAnswerArray.pop();
    setAnswerArray(newAnswerArray);
    //show the previous question
    setQuestionIndex(questionIndex - 1);
  };

  //Go to next question
  const navNext = (index = null) => {
    let newAnswerArray = answerArray;
    let updatedAnswer = currentAnswer;

    if (index !== null) {
      updatedAnswer = index;
    }

    if (newAnswerArray.length < questionsAndAnswers.length) {
      //push a new answer (currentAnswer) to the answer array
      newAnswerArray.push(updatedAnswer);
      setAnswerArray(newAnswerArray);
    } else {
      newAnswerArray.pop();
      newAnswerArray.push(updatedAnswer);
      setAnswerArray(newAnswerArray);
    }
    //show the next question or finished questionnaire?
    if (newAnswerArray.length < questionsAndAnswers.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      finishedQuestionnaire();
    }
  };

  //Set current answer
  const setCurrentAnswerFunc = index => {
    setCurrentAnswer(index);
    if (!props.showNavigation) {
      navNext(index);
    }
  };

  const finishedQuestionnaire = () => {
    props.onFinish(answerArray);
  };

  return (
    <View style={props.questionnaireStyle || questionnaireStyle.outerContainer}>
      <ProgressBar
        counterContainerStyle={props.counterContainerStyle}
        counterTextStyle={props.counterTextStyle}
        trackBackground={props.trackBackground}
        filledTrackBackground={props.filledTrackBackground}
        progressBackground={props.progressBackground}
        progressPadding={props.progressPadding}
        questionIndex={questionIndex}
        totalQuestions={questionsAndAnswers.length}></ProgressBar>
      <QuestionCard
        setCurrentAnswerFunc={index => {
          setCurrentAnswerFunc(index);
        }}
        navNext={navNext}
        currentQuestion={questionsAndAnswers[questionIndex].question}
        currentAnswers={questionsAndAnswers[questionIndex].answers}
        currentId={questionsAndAnswers[questionIndex].id}
        showPrefix={props.showPrefix}
        prefixType={props.prefixType}
        answerWrapperStyle={props.answerWrapperStyle}
        selectedAnswerWrapperStyle={props.selectedAnswerWrapperStyle}
        selectedAnswerTextStyle={props.selectedAnswerTextStyle}
        answerTextStyle={props.answerTextStyle}
        questionCardWrapperStyle={props.questionCardWrapperStyle}
        answerScrollViewStyle={props.answerScrollViewStyle}
        questionWrapperStyle={props.questionWrapperStyle}
        questionTextStyle={props.questionTextStyle}
        dotStyle={props.dotStyle}></QuestionCard>
      <Nav
        showNavigation={props.showNavigation}
        navBack={navBack}
        backBtn={props.backBtnText}
        nextBtn={props.nextBtnText}
        navNext={navNext}
        index={questionIndex}
        navStyle={props.navStyle}
        navBtnWrapperStyle={props.navBtnWrapperStyle}
        navTextStyle={props.navTextStyle}></Nav>
    </View>
  );
};

const questionnaireStyle = StyleSheet.create({
  outerContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Questionnaire;
