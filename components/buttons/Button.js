import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import StyleConstants from '../../StyleConstants';

const Button = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress();
      }}
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
      {props.loading && (
        <ActivityIndicator
          color={
            props.filled
              ? StyleConstants.colors.white
              : StyleConstants.colors.blue.dark
          }></ActivityIndicator>
      )}
    </TouchableOpacity>
  );
};

const buttonStyles = StyleSheet.create({
  wrapperStyle: {
    alignSelf: 'stretch',
    flexDirection: 'row',
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
    marginRight: StyleConstants.margins.small,
  },
  filledText: {
    color: StyleConstants.colors.white,
  },
});

export default Button;
