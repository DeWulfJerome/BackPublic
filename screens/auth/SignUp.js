import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import {connect} from 'react-redux';

import StyleConstants from '../../StyleConstants';
import Copy from '../../assets/Copy';

import SignupForm from '../../Views/login/SignupForm';

class SignUp extends React.Component {
  showLogin = () => {
    this.props.navigation.navigate('Login');
  };
  render() {
    return (
      <View style={loginStyles.containerStyle}>
        <KeyboardAvoidingView
          contentContainerStyle={loginStyles.innerContainerStyle}
          behavior="position">
          <Image
            source={require('../../assets/Logo/logo.png')}
            style={loginStyles.logoStyle}></Image>

          <SignupForm
            navProps={this.props.navigation}
            dispatch={this.props.dispatch}></SignupForm>
          <Text onPress={this.showLogin} style={loginStyles.textStyle}>
            {Copy.NL.login.hasAccount}
          </Text>
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
  textStyle: {
    color: StyleConstants.colors.blue.dark,
  },
});

export default connect(mapStateToProps)(SignUp);
