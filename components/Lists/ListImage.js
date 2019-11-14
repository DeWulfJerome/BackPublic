import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const ListImage = props => {
  return (
    <View style={imageStyle.wrapperStyle}>
      <Image style={imageStyle.imageStyle} source={props.uri}></Image>
    </View>
  );
};

const imageStyle = StyleSheet.create({
  wrapperStyle: {
    width: '33%',
  },
  imageStyle: {
    height: 60,
    width: 60,
  },
});

export default ListImage;
