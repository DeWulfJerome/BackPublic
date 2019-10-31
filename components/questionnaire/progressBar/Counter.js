import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Counter = props => {
  return (
    <View style={props.counterContainerStyle || counterStyle.counterContainer}>
      <Text style={props.counterTextStyle || counterStyle.counterText}>
        {props.currentCount}
      </Text>
      <Text style={props.counterTextStyle || counterStyle.counterText}>/</Text>
      <Text style={props.counterTextStyle || counterStyle.counterText}>
        {props.totalCount}
      </Text>
    </View>
  );
};

const counterStyle = StyleSheet.create({
  counterContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  counterText: {
    color: '#6692C1',
    fontSize: 24,
    fontWeight: '600',
  },
});

export default Counter;
