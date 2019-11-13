import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, Animated, Easing} from 'react-native';

import StyleConstants from '../StyleConstants';

const getIcon = route => {
  let icon;
  switch (route) {
    case 'Feed':
      icon = require('../assets/Icons/Nav/feed.png');
      return icon;

    case 'Profiel':
      icon = require('../assets/Icons/Nav/bucket.png');
      return icon;

    case 'Badges':
      icon = require('../assets/Icons/Nav/badge.png');
      return icon;
  }
};

const TabBarIcon = props => {
  const [sizeAnim, setSizeAnim] = useState(new Animated.Value(40));

  const grow = () => {
    sizeAnim.setValue(0);
    Animated.timing(sizeAnim, {
      toValue: 100,
      duration: 300,
      easing: Easing.elastic(1),
    }).start();
  };

  const shrink = () => {
    Animated.timing(sizeAnim, {
      toValue: 40,
      duration: 150,
      easing: Easing.elastic(1),
    }).start();
  };

  useEffect(() => {
    if (props.active) {
      grow();
    } else {
      shrink();
    }
  }, [props.active]);

  return (
    <Animated.View
      style={[
        iconStyle.containerStyle,
        {width: sizeAnim},
        props.active ? iconStyle.activeContainer : null,
      ]}>
      <Image
        source={getIcon(props.route)}
        style={{height: 20, width: 20}}></Image>
      <View style={iconStyle.textContainer}>
        <Text
          style={[
            iconStyle.textStyle,
            ,
            props.active ? iconStyle.activeText : null,
          ]}>
          {props.name}
        </Text>
      </View>
    </Animated.View>
  );
};

const iconStyle = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: StyleConstants.colors.blue.dark,
    padding: StyleConstants.padding.small,
    borderRadius: StyleConstants.border.radius.large,
    height: 40,
    overflow: 'hidden',
  },
  activeContainer: {
    paddingLeft: StyleConstants.padding.small + 2,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
  },
  textStyle: {
    color: StyleConstants.colors.white,
    fontWeight: StyleConstants.font.weight.thicc,
  },
});

export default TabBarIcon;
