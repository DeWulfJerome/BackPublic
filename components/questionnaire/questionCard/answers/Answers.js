import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';

import Answer from './Answer';

const Answers = props => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const selectAnswer = index => {
    setSelectedAnswer(index);
    props.setCurrentAnswerFunc(index);
  };

  const renderAnswers = (answers, currentId) => {
    return answers.map((val, index) => {
      return (
        <Answer
          selectedAnswer={selectedAnswer}
          answerWrapperStyle={props.answerWrapperStyle}
          answerTextStyle={props.answerTextStyle}
          selectedAnswerWrapperStyle={props.selectedAnswerWrapperStyle}
          selectedAnswerTextStyle={props.selectedAnswerTextStyle}
          selectAnswer={index => selectAnswer(index)}
          showPrefix={props.showPrefix}
          prefixType={props.prefixType}
          question={val}
          key={val + currentId}
          index={index}
          dotStyle={props.dotStyle}></Answer>
      );
    });
  };

  return (
    <ScrollView>{renderAnswers(props.answers, props.currentId)}</ScrollView>
  );
};

export default Answers;
