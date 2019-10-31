import React from 'react';
import {View, StyleSheet} from 'react-native';

import NavBtn from './NavBtn';

const Nav = props => {
  if (props.showNavigation) {
    return (
      <View style={props.navStyle || navStyles.navContainer}>
        <NavBtn
          text={props.backBtn || 'Back'}
          onPress={props.navBack}
          disabled={props.index === 0 ? true : false}
          navBtnWrapperStyle={props.navBtnWrapperStyle}
          navTextStyle={props.navTextStyle}></NavBtn>
        <NavBtn
          text={props.nextBtn || 'Next'}
          onPress={props.navNext}
          disabled={false}></NavBtn>
      </View>
    );
  } else {
    return null;
  }
};

const navStyles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
});

export default Nav;
