import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

const Question = props => {
  const [slideAnim] = useState(new Animated.Value(deviceWidth));

  useEffect(() => {
    slideIn();
  });

  const slideIn = () => {
    slideAnim.setValue(deviceWidth);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 200,
      easing: Easing.in,
    }).start();
  };

  const slideOut = () => {
    Animated.timing(slideAnim, {
      toValue: -deviceWidth,
      duration: 200,
      easing: Easing.in,
    }).start();
  };

  return (
    <View
      style={[props.questionWrapperStyle || questionStyle.questionWrapper, ,]}>
      <Animated.Text
        style={[
          props.questionTextStyle || questionStyle.textStyle,
          {transform: [{translateX: slideAnim}]},
        ]}>
        {props.question}
      </Animated.Text>
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
