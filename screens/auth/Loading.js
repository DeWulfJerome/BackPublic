import React, {useEffect} from 'react';
import {View, Image, AsyncStorage} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import axios from 'axios';

import StyleConstants from '../../StyleConstants';

import {validateJWTToken} from '../../controllers/auth/auth';
import {resetAdviezen} from '../../controllers/feed/feedActions';

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
      axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
      const validatedToken = await validateJWTToken(userToken);
      if (validatedToken === 'jwt_auth_valid_token') {
        // Is this a new day?
        let resetTime = await resetAdviezen();

        if (resetTime.data) {
          // Lists have been reset in database
          // Hide splash
          SplashScreen.hide();
          // This should go to the questionnaire or tip screens
          props.navigation.navigate('Questions', {
            numbQuestions: resetTime.data,
          });
          return;
        }
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
