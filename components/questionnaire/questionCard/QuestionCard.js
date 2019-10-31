import React from 'react';
import {View, StyleSheet} from 'react-native';

import Question from './Question';
import Answers from './answers/Answers';

const QuestionCard = props => {
  return (
    <View
      style={
        props.questionCardWrapperStyle || questionCardStyle.questionCardWrapper
      }>
      <Question
        question={props.currentQuestion}
        questionWrapperStyle={props.questionWrapperStyle}
        questionTextStyle={props.questionTextStyle}></Question>
      <View
        style={
          props.answerScrollViewStyle || questionCardStyle.answerContainer
        }>
        <Answers
          answerWrapperStyle={props.answerWrapperStyle}
          selectedAnswerWrapperStyle={props.selectedAnswerWrapperStyle}
          selectedAnswerTextStyle={props.selectedAnswerTextStyle}
          currentId={props.currentId}
          setCurrentAnswerFunc={props.setCurrentAnswerFunc}
          navNext={props.navNext}
          showPrefix={props.showPrefix}
          prefixType={props.prefixType}
          answers={props.currentAnswers}
          dotStyle={props.dotStyle}></Answers>
      </View>
    </View>
  );
};

const questionCardStyle = StyleSheet.create({
  questionCardWrapper: {
    alignSelf: 'stretch',
  },
  answerContainer: {
    height: 300,
    marginBottom: 20,
  },
});

export default QuestionCard;
