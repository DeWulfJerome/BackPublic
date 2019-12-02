import React, {useState} from 'react';
import {View, StyleSheet, Animated, Dimensions, Easing} from 'react-native';

import ProgressBar from './progressBar/ProgressBar';
import QuestionCard from './questionCard/QuestionCard';
import Nav from './nav/Nav';

const deviceWidth = Dimensions.get('window').width;

const Questionnaire = props => {
  const questionsAndAnswers = props.questions;
  //keep track of current question internally
  const [questionIndex, setQuestionIndex] = useState(0);
  //Holds all the indexes answers the user has given
  const [answerArray, setAnswerArray] = useState([]);
  //Holds the index of the currently selected answer for the current question
  const [currentAnswer, setCurrentAnswer] = useState(null);

  const [slideAnim] = useState(new Animated.Value(0));
  const [animDuration, setAnimDuration] = useState(
    props.animationInterval || 0,
  );

  //Go to previous question
  const navBack = () => {
    slideOutToRight(() => {
      prevQuestion(slideInFromLeft);
    });
  };

  const prevQuestion = (
    cb = () => {
      return;
    },
  ) => {
    //Take the last answer out of the answer array
    let newAnswerArray = answerArray;
    newAnswerArray.pop();
    setAnswerArray(newAnswerArray);
    //show the previous question

    setQuestionIndex(questionIndex - 1);
    cb();
  };

  //Go to next question
  const navNext = (index = null) => {
    slideOutToLeft(() => {
      nextQuestion(index, slideInFromRight);
    });
  };

  const nextQuestion = (
    index,
    cb = () => {
      return;
    },
  ) => {
    let newAnswerArray = answerArray;
    let updatedAnswer = currentAnswer;

    if (index !== null) {
      updatedAnswer = index;
    }

    if (newAnswerArray.length < questionsAndAnswers.length) {
      // Push a new answer (currentAnswer) to the answer array
      newAnswerArray.push(updatedAnswer);
      setAnswerArray(newAnswerArray);
    } else {
      newAnswerArray.pop();
      newAnswerArray.push(updatedAnswer);
      setAnswerArray(newAnswerArray);
    }
    // Fire the onAnswer prop with the given answer and the index of the answered question
    // props.questions[questionIndex].answers[updatedAnswer] = written answer given
    if (props.onAnswer) {
      props.onAnswer(updatedAnswer, questionIndex);
    }
    // Show the next question or finished questionnaire?
    if (newAnswerArray.length < questionsAndAnswers.length) {
      setQuestionIndex(questionIndex + 1);
      cb();
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

  //Slide animations
  const slideInFromRight = (
    cb = () => {
      return;
    },
  ) => {
    slideAnim.setValue(deviceWidth);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: animDuration,
      easing: Easing.in,
    }).start(() => {
      cb();
    });
  };

  const slideOutToLeft = (
    cb = () => {
      return;
    },
  ) => {
    Animated.timing(slideAnim, {
      toValue: -deviceWidth,
      duration: animDuration,
      easing: Easing.in,
    }).start(() => {
      cb();
    });
  };

  const slideOutToRight = (
    cb = () => {
      return;
    },
  ) => {
    Animated.timing(slideAnim, {
      toValue: deviceWidth,
      duration: animDuration,
      easing: Easing.in,
    }).start(() => {
      cb();
    });
  };

  const slideInFromLeft = (
    cb = () => {
      return;
    },
  ) => {
    slideAnim.setValue(-deviceWidth);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: animDuration,
      easing: Easing.in,
    }).start(() => {
      cb();
    });
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
        slideAnim={slideAnim}
        renderNextCards={props.renderNextCards}
        nextCardsColor={props.nextCardsColor}
        setCurrentAnswerFunc={index => {
          setCurrentAnswerFunc(index);
        }}
        blockNavigation={props.blockNavigation}
        navNext={navNext}
        currentQuestion={questionsAndAnswers[questionIndex].question}
        currentAnswers={questionsAndAnswers[questionIndex].answers}
        questionIndex={questionIndex}
        totalQuestions={questionsAndAnswers.length}
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
        showNavigation={props.showNavigation && props.blockNavigation === false}
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
