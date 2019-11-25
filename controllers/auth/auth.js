import {AsyncStorage} from 'react-native';
import axios from 'axios';

const serverUrl =
  'https://vps-d0e9b0ec-81b9-4b27-87c0-43cd35d5ef77.yourvps.io/customer/back-up-plan/?rest_route=';

export const createAccount = async (email, password, name) => {
  return axios.post(serverUrl + '/back-up-plan/v1/register_user', {
    email: email,
    password: password,
    name: name,
  });
};

export const getNewJWTToken = (email, password) => {
  return axios.post(serverUrl + '/jwt-auth/v1/token', {
    username: email,
    password: password,
  });
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
          // Set token in headers
          axios.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${tokenResponse.data.token}`;
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
    return axios
      .post(serverUrl + '/jwt-auth/v1/token/validate')
      .then(response => {
        return response.data.code;
      })
      .catch(err => {
        return err;
      });
  }
};
