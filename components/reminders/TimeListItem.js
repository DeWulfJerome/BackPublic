import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';

import StyleConstants from '../../StyleConstants';

const TimeListItem = props => {
  return (
    <View style={timeStyle.wrapperStyle}>
      <View style={timeStyle.textWrapper}>
        <Image
          source={require('../../assets/Icons/reminder.png')}
          style={{
            width: 20,
            height: 20,
            marginRight: StyleConstants.margins.medium,
          }}></Image>
        <Text style={timeStyle.textStyle}>{props.text}</Text>
      </View>
      <TouchableOpacity
        onPress={() => props.onPress()}
        style={timeStyle.removeWrapper}>
        <Image
          source={require('../../assets/Icons/plus.png')}
          style={{
            width: 20,
            height: 20,
            transform: [{rotate: '45deg'}],
          }}></Image>
      </TouchableOpacity>
    </View>
  );
};

const timeStyle = StyleSheet.create({
  wrapperStyle: {
    alignSelf: 'stretch',
    margin: StyleConstants.margins.medium,
    marginBottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textWrapper: {
    flexDirection: 'row',
    backgroundColor: StyleConstants.colors.grey.light,
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingLeft: StyleConstants.padding.medium,
    alignItems: 'center',
    borderRadius: StyleConstants.border.radius.small,
    marginRight: StyleConstants.margins.small,
    height: 60,
  },
  removeWrapper: {
    padding: StyleConstants.padding.medium,
    backgroundColor: StyleConstants.colors.red.clear,
    borderRadius: StyleConstants.border.radius.small,
    height: 60,
  },
  textStyle: {
    fontSize: StyleConstants.font.sizes.medium,
    color: StyleConstants.colors.subFontBlack,
    fontWeight: StyleConstants.font.weight.title,
  },
});

export default TimeListItem;
