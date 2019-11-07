import {Dimensions} from 'react-native';
const deviceWidth = Dimensions.get('window').width;

const StyleConstants = {
  colors: {
    blue: {
      dark: '#6692C1',
      medium: '#C6D2E6',
      light: '#F1F9FF',
    },
    white: '#fff',
  },
  margins: {
    small: 10,
    medium: 20,
    large: 30,
  },
  padding: {
    small: 10,
    medium: 20,
    large: 30,
  },
  border: {
    width: {
      small: 1,
      medium: 2,
      large: 3,
    },
    radius: {
      small: 5,
      medium: 10,
      large: 20,
    },
  },
  placeholder: {
    color: '#C6D2E6',
  },
  containerWidth: {
    full: deviceWidth,
    padded: deviceWidth - 40,
  },
};

module.exports = StyleConstants;
