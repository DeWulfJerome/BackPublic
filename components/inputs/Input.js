import React, {useState} from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

import StyleConstants from '../../StyleConstants';

const Input = props => {
  const [inputValue, setInputValue] = useState('');
  const [focused, setFocused] = useState(false);
  return (
    <View
      style={[
        inputStyles.wrapperStyle,
        focused ? inputStyles.focusedInputWrapper : null,
        props.error ? inputStyles.errorInputWrapper : null,
      ]}>
      <TextInput
        style={[
          inputStyles.inputStyle,
          props.error ? inputStyles.errorInputStyle : null,
        ]}
        placeholder={props.placeholder}
        secureTextEntry={props.password}
        autoCapitalize={'none'}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={() => {
          setFocused(false);
        }}
        placeholderTextColor={StyleConstants.placeholder.color}
        value={inputValue}
        onChange={text => {
          setInputValue(text.nativeEvent.text);
          props.onChangeText && props.onChangeText(text.nativeEvent.text);
        }}></TextInput>
    </View>
  );
};

const inputStyles = StyleSheet.create({
  wrapperStyle: {
    borderWidth: StyleConstants.border.width.medium,
    borderColor: StyleConstants.colors.blue.medium,
    borderRadius: StyleConstants.border.radius.small,
    marginBottom: StyleConstants.margins.medium,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
  },
  focusedInputWrapper: {
    borderColor: StyleConstants.colors.blue.dark,
  },
  errorInputWrapper: {
    borderColor: StyleConstants.colors.red.light,
  },
  inputStyle: {
    padding: StyleConstants.padding.medium,
    flex: 1,
    color: StyleConstants.colors.blue.dark,
  },
  errorInputStyle: {
    color: StyleConstants.colors.red.dark,
  },
});

export default Input;
