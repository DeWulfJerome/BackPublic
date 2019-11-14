import React from 'react';
import {View, StyleSheet} from 'react-native';

const ListContent = props => {
  return <View style={contentStyle.wrapperStyle}>{props.content}</View>;
};

const contentStyle = StyleSheet.create({
  wrapperStyle: {
    width: '66%',
  },
});

export default ListContent;
