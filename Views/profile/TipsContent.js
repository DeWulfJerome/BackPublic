import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import StyleConstants from '../../StyleConstants';

const TipsContent = props => {
  return (
    <View style={contentStyle.wrapperStyle}>
      <Text style={contentStyle.title}>{props.title}</Text>
      <Text style={contentStyle.subText}>{props.sub}</Text>
    </View>
  );
};

const contentStyle = StyleSheet.create({
  wrapperStyle: {},
  title: {
    fontSize: StyleConstants.font.sizes.medium,
    color: StyleConstants.colors.black.fontBlack,
  },
  subText: {
    fontSize: StyleConstants.font.sizes.small,
    color: StyleConstants.colors.black.fontBlack,
  },
});

export default TipsContent;
