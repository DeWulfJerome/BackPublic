import React from 'react';
import {View, StyleSheet} from 'react-native';

import Counter from './Counter';
import Track from './Track';

const ProgressBar = props => {
  return (
    <View
      style={[
        barStyle.containerStyle,
        props.progressBackground && {backgroundColor: props.progressBackground},
        props.progressPadding && {
          paddingLeft: props.progressPadding,
          paddingRight: props.progressPadding,
        },
      ]}>
      <Counter
        counterContainerStyle={props.counterContainerStyle}
        counterTextStyle={props.counterTextStyle}
        currentCount={props.questionIndex + 1}
        totalCount={props.totalQuestions}></Counter>
      <Track
        trackBackground={props.trackBackground}
        filledTrackBackground={props.filledTrackBackground}
        currentCount={props.questionIndex + 1}
        totalCount={props.totalQuestions}></Track>
    </View>
  );
};

const barStyle = StyleSheet.create({
  containerStyle: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default ProgressBar;
