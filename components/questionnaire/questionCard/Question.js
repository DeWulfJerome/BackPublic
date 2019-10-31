import React from 'react';
import {View, StyleSheet, Animated} from 'react-native';

const Question = props => {
  return (
    <View style={[props.questionWrapperStyle || questionStyle.questionWrapper]}>
      <Animated.Text
        style={[
          props.questionTextStyle || questionStyle.textStyle,
          {transform: [{translateX: props.slideAnim}]},
        ]}>
        {props.question}
      </Animated.Text>
      {props.children}
    </View>
  );
};

const questionStyle = StyleSheet.create({
  questionWrapper: {
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  textStyle: {
    fontSize: 18,
  },
});

export default Question;
