import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import StyleConstants from '../../StyleConstants';

import ListImage from './ListImage';
import ListContent from './ListContent';

const ListItem = props => {
  return (
    <TouchableOpacity
      style={[itemStyle.wrapperStyle, props.done ? itemStyle.done : null]}
      disabled={props.done}
      onPress={() => {
        props.onPress();
      }}>
      <ListImage uri={props.uri}></ListImage>
      <ListContent content={props.content}></ListContent>
      <View style={itemStyle.borderLine}></View>
    </TouchableOpacity>
  );
};

const itemStyle = StyleSheet.create({
  wrapperStyle: {
    backgroundColor: StyleConstants.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    padding: StyleConstants.padding.medium,
  },
  borderLine: {
    position: 'absolute',
    height: 2,
    backgroundColor: StyleConstants.colors.grey.light,
    bottom: 0,
    right: 0,
    left: '33%',
    borderRadius: StyleConstants.border.radius.large,
  },
  done: {
    backgroundColor: '#fafafa',
  },
});

export default ListItem;
