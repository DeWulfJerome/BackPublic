import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import StyleConstants from '../../StyleConstants';
import Copy from '../../assets/Copy';
import styles from '../../styles';

import {setJWTToken} from '../../controllers/auth/auth';

import Button from '../../components/buttons/Button';
import Input from '../../components/inputs/Input';

const LoginForm = props => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [signupError, setSignupError] = useState({
    loading: false,
    error: false,
    val: '',
  });

  const changeFormData = (field, text) => {
    setForm({
      ...form,
      [field]: text,
    });
  };

  const login = () => {
    props
      .dispatch(setJWTToken(form.email, form.password))
      .then(() => {
        setSignupError({
          loading: false,
          error: false,
          val: '',
        });
        // Go To App
        props.navProps.navigate('App');
      })
      .catch(error => {
        setSignupError({
          loading: false,
          error: true,
          val: error,
        });
      });
  };

  return (
    <View style={loginFormStyle.containerStyle}>
      <View style={loginFormStyle.textWrapper}>
        <Text style={styles.title}>{Copy.NL.login.welcome}</Text>
        <Text style={styles.subTitle}>{Copy.NL.login.loginText}</Text>
      </View>
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
      {signupError.error && (
        <Text style={loginFormStyle.errorText}>{signupError.val}</Text>
      )}
      <Button filled={true} text={'log in'} onPress={login}></Button>
    </View>
  );
};

const loginFormStyle = StyleSheet.create({
  containerStyle: {
    alignSelf: 'stretch',
  },
  textStyle: {
    color: StyleConstants.colors.blue.dark,
    marginBottom: StyleConstants.margins.medium,
  },
  errorText: {
    color: StyleConstants.colors.red.dark,
    marginBottom: StyleConstants.margins.medium,
    alignSelf: 'center',
  },
  textWrapper: {
    marginBottom: StyleConstants.margins.large,
    alignItems: 'flex-start',
    alignSelf: 'stretch',
  },
});

export default LoginForm;
