import {Dimensions} from 'react-native';
const deviceWidth = Dimensions.get('window').width;

const StyleConstants = {
  colors: {
    blue: {
      dark: '#6692C1',
      medium: '#C6D2E6',
      light: '#F1F9FF',
    },
    red: {
      dark: '#CA4B3C',
      medium: '#D36B5F',
      light: '#DD8C82',
    },
    white: '#fff',
  },
  margins: {
    small: 10,
    medium: 20,
    large: 40,
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
  font: {
    sizes: {
      small: 11,
      normal: 16,
      medium: 20,
      large: 30,
    },
  },
  logoSizes: {
    large: {
      height: deviceWidth * 0.8 * 0.5714,
      width: deviceWidth * 0.8,
    },
    medium: {
      height: deviceWidth * 0.8 * 0.5714 * 0.8,
      width: deviceWidth * 0.8 * 0.8,
    },
    small: {
      height: deviceWidth * 0.8 * 0.5714 * 0.6,
      width: deviceWidth * 0.8 * 0.6,
    },
  },
};

module.exports = StyleConstants;
