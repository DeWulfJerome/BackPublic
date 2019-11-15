import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import StyleConstants from '../../StyleConstants';

const FeedContent = props => {
  return (
    <View style={contentStyle.outerWrapper}>
      <View style={contentStyle.wrapperStyle}>
        <Text style={contentStyle.title}>{props.title}</Text>
        <Text style={contentStyle.subText}>{props.sub}</Text>
      </View>
      <TouchableOpacity
        style={contentStyle.buttonWrapper}
        onPress={() => {
          console.log('add this one');
        }}>
        <Image
          source={require('../../assets/Icons/plus.png')}
          style={{height: 10, width: 10}}></Image>
      </TouchableOpacity>
    </View>
  );
};

const contentStyle = StyleSheet.create({
  outerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperStyle: {
    width: '85%',
  },
  title: {
    fontSize: StyleConstants.font.sizes.medium,
    color: StyleConstants.colors.black.fontBlack,
  },
  subText: {
    fontSize: StyleConstants.font.sizes.small,
    color: StyleConstants.colors.black.fontBlack,
  },
  buttonWrapper: {
    backgroundColor: StyleConstants.colors.blue.dark,
    padding: StyleConstants.padding.small,
    borderRadius: StyleConstants.border.radius.full,
  },
});

export default FeedContent;
