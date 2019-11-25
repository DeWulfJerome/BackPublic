import React, {useState} from 'react';
import {View, ScrollView, Text, StyleSheet, Dimensions} from 'react-native';

import StyleConstants from '../../StyleConstants';
import styles from '../../styles';
import Copy from '../../assets/Copy';

import {createAccount, setJWTToken} from '../../controllers/auth/auth';

import Button from '../../components/buttons/Button';
import Input from '../../components/inputs/Input';

const SignupForm = props => {
  const [form, setForm] = useState({
    name: 'jerome',
    email: 'jerome.dewulf@hotmail.com',
    password: 'test123',
    password2: 'test123',
  });

  const [passError, setPassError] = useState(false);
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

  const signUp = () => {
    if (form.password !== form.password2) {
      setPassError(true);
    } else {
      setPassError(false);
      setSignupError({
        ...signupError,
        loading: true,
      });
      createAccount(form.email, form.password, form.name)
        .then(response => {
          setSignupError({loading: false, error: false, val: ''});
          props.dispatch(setJWTToken(form.email, form.password)).then(() => {
            setSignupError({
              loading: false,
              error: false,
              val: '',
            });
            // Go to app
            props.navProps.navigate('App');
          });
        })
        .catch(error => {
          console.log('error: ', error);
          setSignupError({
            loading: false,
            error: true,
            val: error.response.data.message,
          });
        });
    }
  };

  return (
    <ScrollView
      style={loginFormStyle.containerStyle}
      contentContainerStyle={{alignItems: 'center'}}>
      <View style={loginFormStyle.textWrapper}>
        <Text style={styles.title}>{Copy.NL.login.welcome}</Text>
        <Text style={styles.subTitle}>{Copy.NL.login.createAccount}</Text>
      </View>

      <Input
        placeholder={Copy.NL.login.name}
        onChangeText={text => {
          changeFormData('name', text);
        }}></Input>
      <Input
        placeholder={Copy.NL.login.email}
        onChangeText={text => {
          changeFormData('email', text);
        }}></Input>
      {passError && (
        <Text style={loginFormStyle.errorText}>
          {Copy.NL.login.passwordMatch}
        </Text>
      )}

      <Input
        error={passError}
        placeholder={Copy.NL.login.password}
        password={true}
        onChangeText={text => {
          changeFormData('password', text);
        }}></Input>
      <Input
        error={passError}
        placeholder={Copy.NL.login.repeatPassword}
        password={true}
        onChangeText={text => {
          changeFormData('password2', text);
        }}></Input>
      {signupError.error && (
        <Text style={loginFormStyle.errorText}>{signupError.val}</Text>
      )}
      <Button
        loading={signupError.loading}
        onPress={signUp}
        filled={true}
        text={Copy.NL.login.createAccount}
        on></Button>
    </ScrollView>
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

export default SignupForm;
