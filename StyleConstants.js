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
    grey: {
      //change
      dark: '#f2f2f2',
      medium: '#f2f2f2',
      light: '#f2f2f2',
    },
    black: {
      fontBlack: '#393D42',
      subFontBlack: '#909396',
    },
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
    navAvoider: 100,
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
      full: 100,
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
      mediumLarge: 25,
      large: 30,
    },
    lineheight: {
      normal: 25,
      medium: 32,
    },
    weight: {
      normal: '400',
      title: '600',
      thicc: 'bold',
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
  shadow: {
    top: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
    middle: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
    bottom: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,

      elevation: 1,
    },
  },
};

module.exports = StyleConstants;
