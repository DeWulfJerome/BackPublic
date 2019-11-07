import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import StyleConstants from '../../StyleConstants';

const Button = props => {
  return (
    <TouchableOpacity
      style={[
        buttonStyles.wrapperStyle,
        props.filled ? buttonStyles.filledButton : null,
      ]}>
      <Text
        style={[
          buttonStyles.textStyle,
          props.filled ? buttonStyles.filledText : null,
        ]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const buttonStyles = StyleSheet.create({
  wrapperStyle: {
    alignSelf: 'stretch',
    borderWidth: StyleConstants.border.width.medium,
    borderColor: StyleConstants.colors.blue.medium,
    padding: StyleConstants.padding.medium,
    borderRadius: StyleConstants.border.radius.small,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: StyleConstants.margins.medium,
  },
  filledButton: {
    backgroundColor: StyleConstants.colors.blue.dark,
    borderColor: StyleConstants.colors.blue.dark,
  },
  textStyle: {
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: 12,
    color: StyleConstants.colors.blue.dark,
  },
  filledText: {
    color: StyleConstants.colors.white,
  },
});

export default Button;
