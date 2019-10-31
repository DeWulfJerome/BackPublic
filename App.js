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
        showNavigation={true}
        showPrefix={true}
        prefixType={'dot'}
        backBtnText={'Vorige'}
        onFinish={result => {
          console.log(result);
        }}
        nextBtnText={'Volgende'}
        progressPadding={30}
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
