import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import StyleConstants from '../../StyleConstants';
import Copy from '../../assets/Copy';

import Button from '../../components/buttons/Button';
import Input from '../../components/inputs/Input';

const LoginForm = props => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const changeFormData = (field, text) => {
    setForm({
      ...form,
      [field]: text,
    });
  };

  return (
    <View style={loginFormStyle.containerStyle}>
      <Input
        placeholder={Copy.NL.login.email}
        onChangeText={text => {
          changeFormData('email', text);
        }}></Input>
      <Input
        placeholder={Copy.NL.login.password}
        password={true}
        onChangeText={text => {
          changeFormData('password', text);
        }}></Input>
      <Button filled={true} text={'log in'}></Button>
    </View>
  );
};

const loginFormStyle = StyleSheet.create({
  containerStyle: {
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  textStyle: {
    color: StyleConstants.colors.blue.dark,
    marginBottom: StyleConstants.margins.medium,
  },
});

export default LoginForm;
