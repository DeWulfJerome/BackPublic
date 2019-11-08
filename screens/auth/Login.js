import React from 'react';
import {Image, KeyboardAvoidingView, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import StyleConstants from '../../StyleConstants';

import SignupForm from '../../Views/login/SignupForm';

class Login extends React.Component {
  render() {
    console.log(this.props.token);
    return (
      <View style={loginStyles.containerStyle}>
        <KeyboardAvoidingView
          contentContainerStyle={loginStyles.innerContainerStyle}
          behavior="position">
          <Image
            source={require('../../assets/Logo/logo.png')}
            style={loginStyles.logoStyle}></Image>

          <SignupForm dispatch={this.props.dispatch}></SignupForm>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.authReducer.auth.token,
  };
};

const loginStyles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
  },
  innerContainerStyle: {
    width: StyleConstants.containerWidth.padded,
    alignItems: 'center',
  },
  logoStyle: StyleConstants.logoSizes.large,
});

export default connect(mapStateToProps)(Login);