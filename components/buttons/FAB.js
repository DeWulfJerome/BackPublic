import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import StyleConstants from '../../StyleConstants';

const FAB = props => {
  return (
    <TouchableOpacity
      style={[fabStyle.wrapperStyle, StyleConstants.shadow.top]}
      onPress={() => {
        props.onPress();
      }}>
      <Image
        source={require('../../assets/Icons/plus.png')}
        style={{width: 20, height: 20}}></Image>
    </TouchableOpacity>
  );
};

const fabStyle = StyleSheet.create({
  wrapperStyle: {
    backgroundColor: StyleConstants.colors.red.dark,
    padding: StyleConstants.padding.medium,
    borderRadius: StyleConstants.border.radius.full,
  },
});

export default FAB;
