import React from 'react';
import {View, StyleSheet} from 'react-native';

import Question from './Question';
import Answers from './answers/Answers';

const QuestionCard = props => {
  const renderNextQuestionCards = (total, index) => {
    let viewArr = [];
    for (let i = 1; i <= total - index - 1; i++) {
      viewArr.push(
        <View
          key={i}
          style={{
            position: 'absolute',
            bottom: -(12 * i),
            left: 20 + 10 * (i - 1),
            right: 20 + 10 * (i - 1),
            height: 70,
            zIndex: -1,
            backgroundColor: props.nextCardsColor || '#fff',
            opacity: 0.4 / (i * i),
          }}></View>,
      );
    }
    return viewArr;
  };
  return (
    <View
      style={
        props.questionCardWrapperStyle || questionCardStyle.questionCardWrapper
      }>
      <Question
        slideAnim={props.slideAnim}
        question={props.currentQuestion}
        questionWrapperStyle={props.questionWrapperStyle}
        questionTextStyle={props.questionTextStyle}>
        {props.renderNextCards &&
          renderNextQuestionCards(props.totalQuestions, props.questionIndex)}
      </Question>
      <View
        style={
          props.answerScrollViewStyle || questionCardStyle.answerContainer
        }>
        <Answers
          blockNavigation={props.blockNavigation}
          slideAnim={props.slideAnim}
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
