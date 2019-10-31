import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Prefix from './Prefix';

const Answer = props => {
  const [selected, setSelected] = useState(false);

  const selectThis = () => {
    setSelected(!selected);
    props.selectAnswer(props.index);
  };

  useEffect(() => {
    if (props.index !== props.selectedAnswer) {
      setSelected(false);
    }
  });

  return (
    <TouchableOpacity
      style={
        [
          props.answerWrapperStyle,
          selected ? props.selectedAnswerWrapperStyle : null,
        ] || [answerStyle.answerWrapper, selected ? answerStyle.selected : null]
      }
      onPress={() => {
        selectThis();
        //setSelected(!selected);
      }}>
      <Prefix
        showPrefix={props.showPrefix}
        selected={selected}
        answerIndex={props.index}
        dotStyle={props.dotStyle}
        prefixType={props.prefixType}></Prefix>

      <Text
        style={
          props.answerTextStyle
            ? [props.answerTextStyle, selected && props.selectedAnswerTextStyle]
            : [
                answerStyle.textStyle,
                selected ? answerStyle.selectedText : null,
              ]
        }>
        {props.question}
      </Text>
    </TouchableOpacity>
  );
};

const answerStyle = StyleSheet.create({
  answerWrapper: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderLeftWidth: 5,
    borderColor: '#fff',
  },
  selected: {
    backgroundColor: '#fff',
  },
  textStyle: {
    fontWeight: '500',
    fontSize: 15,
    color: '#fff',
    marginLeft: 15,
  },
  selectedText: {
    color: '#000',
  },
});

export default Answer;
