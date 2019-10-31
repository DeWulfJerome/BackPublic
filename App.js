/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import styles from './styles';

import Questionnaire from './components/questionnaire/Questionnaire';

//json
import Questions from './tempAssets/questions.json';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#6692C1',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: 90,
          backgroundColor: '#fff',
          alignSelf: 'stretch',
        }}
      />
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
    </View>
  );
};

export default App;
