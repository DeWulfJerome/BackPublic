import React from 'react';
import {View, StyleSheet} from 'react-native';

import StyleConstants from '../../StyleConstants';

const ListItemSeparator = props => {
  return <View style={separatorStyle.barStyle}></View>;
};

const separatorStyle = StyleSheet.create({
  barStyle: {
    height: 2,
    backgroundColor: StyleConstants.colors.white,
    width: '100%',
    borderRadius: StyleConstants.border.radius.large,
    alignSelf: 'flex-end',
  },
});

export default ListItemSeparator;
