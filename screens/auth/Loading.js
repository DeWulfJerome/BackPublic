import React, {useEffect} from 'react';
import {View, Image, AsyncStorage} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import StyleConstants from '../../StyleConstants';

import {validateJWTToken} from '../../controllers/auth/auth';

const Loading = props => {
  useEffect(() => {
    isAuthenticated();
  }, []);

  /**
   * Validates the users token and sends him to app or the login screen depending on the result
   *
   * @returns void
   */
  const isAuthenticated = async () => {
    const userToken = await AsyncStorage.getItem('auth');

    if (userToken) {
      // Validate token
      const validatedToken = await validateJWTToken(userToken);
      if (validatedToken === 'jwt_auth_valid_token') {
        // Hydrate store

        // Hide splash
        SplashScreen.hide();
        // Go to app
        props.navigation.navigate('App');
        return;
      } else {
        // Remove the stored token from AsyncStorage
        AsyncStorage.removeItem('auth');
      }
    }
    // User not authenticated
    reAuth();
  };

  /**
   * Hide the splash screen and send the user to the login screen
   *
   * @returns void
   */
  const reAuth = () => {
    // Hide splash
    SplashScreen.hide();
    // Go to login
    props.navigation.navigate('Auth');
  };

  /**
   * This should not be visible for long
   */
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../../assets/Logo/logo.png')}
        style={StyleConstants.logoSizes.large}></Image>
    </View>
  );
};

export default Loading;
