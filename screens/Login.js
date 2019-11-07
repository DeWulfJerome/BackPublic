import React from 'react';
import {View, StyleSheet} from 'react-native';

import StyleConstants from '../StyleConstants';

import LoginForm from '../Views/login/LoginForm';

class Login extends React.Component {
  render() {
    return (
      <View style={loginStyles.containerStyle}>
        <LoginForm></LoginForm>
      </View>
    );
  }
}

const loginStyles = StyleSheet.create({
  containerStyle: {
    width: StyleConstants.containerWidth.padded,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default Login;
