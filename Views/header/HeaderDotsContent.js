import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import StyleConstants from '../../StyleConstants';

const HeaderDotsContent = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress();
      }}
      style={[
        headerDotStyle.modalBtn,
        {marginTop: -StyleConstants.margins.small},
      ]}>
      <Text style={headerDotStyle.textStyle}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const headerDotStyle = StyleSheet.create({
  modalBtn: {
    padding: StyleConstants.padding.medium,
  },
  textStyle: {
    fontSize: StyleConstants.font.sizes.normal,
  },
});

export default HeaderDotsContent;
