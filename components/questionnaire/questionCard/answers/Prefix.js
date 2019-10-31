import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

const Prefix = props => {
  if (props.showPrefix) {
    switch (props.prefixType) {
      case 'dot':
        return (
          <View
            style={
              props.dotStyle || [
                prefixStyle.dotStyle,
                props.selected ? prefixStyle.selectedDot : null,
              ]
            }></View>
        );

      case 'number':
        return (
          <View>
            <Text
              style={
                props.dotStyle || [
                  prefixStyle.numberStyle,
                  props.selected ? prefixStyle.selectedNumber : null,
                ]
              }>
              {props.answerIndex + 1}
            </Text>
          </View>
        );

      case 'alpha':
        return (
          <View>
            <Text
              style={
                props.dotStyle || [
                  prefixStyle.numberStyle,
                  props.selected ? prefixStyle.selectedNumber : null,
                ]
              }>
              {alphabetArray[props.answerIndex]}
            </Text>
          </View>
        );
      default:
        return (
          <View
            style={
              props.dotStyle || [
                prefixStyle.dotStyle,
                props.selected ? prefixStyle.selectedDot : null,
              ]
            }></View>
        );
    }
  } else {
    return null;
  }
};

const prefixStyle = StyleSheet.create({
  dotStyle: {
    height: 4,
    width: 4,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 4,
  },
  selectedDot: {
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  numberStyle: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.9)',
  },
  selectedNumber: {
    color: 'rgba(0,0,0,0.8)',
  },
});

export default Prefix;
