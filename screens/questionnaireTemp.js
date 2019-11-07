import React from 'react';
import Questionnaire from '../components/questionnaire/Questionnaire';
import styles from '../styles';

import Questions from '../tempAssets/questions.json';

const QuestionnaireTemp = props => {
  return (
    <Questionnaire
      questions={Questions}
      showPrefix={true}
      showNavigation={true}
      onFinish={result => {
        console.log(result);
      }}
      progressPadding={30}
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

export default QuestionnaireTemp;
