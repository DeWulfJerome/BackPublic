import {AsyncStorage} from 'react-native';
import axios from 'axios';

export const createAccount = async (email, password) => {
  return axios.post(
    'https://fluxwebdesign5.be/customer/back-up-plan/wp-json/back-up-plan/v1/register_user',
    {
      email: email,
      password: password,
    },
  );
};

export const getNewJWTToken = (email, password) => {
  return axios.post(
    'https://fluxwebdesign5.be/customer/back-up-plan/wp-json/jwt-auth/v1/token',
    {
      username: email,
      password: password,
    },
  );
};

export const login = (email, password) => {};

export const setJWTToken = (email, password) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      const auth = getNewJWTToken(email, password);
      auth
        .then(tokenResponse => {
          // Set token in AsyncStorage
          AsyncStorage.setItem('auth', tokenResponse.data.token);
          // Set token in store
          dispatch({type: 'SET_JWT_TOKEN', token: tokenResponse.data.token});
          //resolve
          resolve(tokenResponse.data.token);
        })
        .catch(error => {
          //handle errors
          let strippedResponse = error.response.data.message
            .replace(/<[^>]*>?/gm, '')
            .replace('Lost your password?', '');
          reject(strippedResponse);
        });
    });
  };
};

export const validateJWTToken = async token => {
  if (null !== token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return axios
      .post(
        'https://fluxwebdesign5.be/customer/back-up-plan/wp-json/jwt-auth/v1/token/validate',
      )
      .then(response => {
        return response.data.code;
      })
      .catch(err => {
        return err;
      });
  }
};
