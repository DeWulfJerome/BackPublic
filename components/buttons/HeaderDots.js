import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import StyleConstants from '../../StyleConstants';
import Copy from '../../assets/Copy';

import {setAdviesActivity} from '../../controllers/feed/feedActions';

const HeaderDots = props => {
  const [showModal, setShowModal] = useState(false);

  const renderDots = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          setShowModal(true);
        }}
        style={headerDotStyle.containerStyle}>
        <View style={headerDotStyle.dotStyle}></View>
        <View style={headerDotStyle.dotStyle}></View>
        <View style={headerDotStyle.dotStyle}></View>
      </TouchableOpacity>
    );
  };

  const renderModal = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          setShowModal(false);
        }}
        style={headerDotStyle.modalContainer}>
        <View
          style={[
            headerDotStyle.modalInnerContainer,
            StyleConstants.shadow.top,
          ]}>
          {props.children}
        </View>
      </TouchableOpacity>
    );
  };

  if (showModal) {
    return renderModal();
  } else {
    return renderDots();
  }
};

const headerDotStyle = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',

    padding: StyleConstants.margins.medium,
  },
  dotStyle: {
    backgroundColor: StyleConstants.colors.black.fontBlack,
    height: 5,
    width: 5,
    borderRadius: 5,
    margin: 1,
  },
  modalContainer: {
    backgroundColor: 'transparent',
    zIndex: 9999,
    position: 'relative',
    top: 0,
    left: 0,
    alignSelf: 'stretch',
    height: StyleConstants.containerHeight.full,
    width: StyleConstants.containerWidth.full,
  },
  modalInnerContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: StyleConstants.colors.white,
    padding: StyleConstants.padding.small,
  },
});

export default HeaderDots;
