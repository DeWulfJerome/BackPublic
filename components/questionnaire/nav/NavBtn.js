import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const NavBtn = props => {
  return (
    <TouchableOpacity
      style={props.navBtnWrapperStyle || navBtnStyle.wrapper}
      onPress={() => {
        props.onPress();
      }}
      disabled={props.disabled}>
      <Text style={props.navTextStyle || navBtnStyle.textStyle}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const navBtnStyle = StyleSheet.create({
  textStyle: {
    color: '#fff',
    fontWeight: '600',
  },
  wrapper: {
    padding: 20,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.5)',
  },
});

export default NavBtn;
