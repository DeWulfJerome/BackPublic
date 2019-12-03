import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import StyleConstants from '../../StyleConstants';
import styles from '../../styles';

const NoActiveAdvices = props => {
  return (
    <View style={noStyle.wrapperStyle}>
      <Text style={[styles.title, noStyle.title]}>Geen actieve adviezen</Text>
      <Text style={[styles.subTitle, noStyle.subTitle]}>
        Tik op de rode knop om adviezen toe te voegen aan je feed.
      </Text>
    </View>
  );
};

const noStyle = StyleSheet.create({
  wrapperStyle: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: StyleConstants.padding.medium,
  },
  title: {
    fontSize: StyleConstants.font.sizes.mediumLarge,
  },
  subTitle: {
    marginTop: StyleConstants.margins.small,
  },
});

export default NoActiveAdvices;
