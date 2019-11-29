import React from 'react';
import Questionnaire from '../../components/questionnaire/Questionnaire';
import styles from '../../styles';

const QuestionnaireWithOptions = props => {
  return (
    <Questionnaire
      questions={props.questions}
      showPrefix={true}
      showNavigation={false}
      onFinish={props.onFinish}
      progressPadding={30}
      blockNavigation={props.blockNavigation}
      onAnswer={props.onAnswer}
      renderNextCards={true}
      animationInterval={150}
      nextCardsColor={'#fff'}
      questionWrapperStyle={styles.questionWrapperStyle}
      answerWrapperStyle={styles.answerWrapperStyle}
      selectedAnswerWrapperStyle={styles.selectedAnswerWrapperStyle}
      selectedAnswerTextStyle={styles.selectedAnswerTextStyle}
      navStyle={styles.navStyle}
      questionTextStyle={styles.questionTextStyle}
      answerTextStyle={styles.answerTextStyle}
    />
  );
};

export default QuestionnaireWithOptions;
