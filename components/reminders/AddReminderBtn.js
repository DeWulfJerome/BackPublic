import React from 'react';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';

import StyleConstants from '../../StyleConstants';

const AddReminderBtn = props => {
  return (
    <View style={addStyle.wrapper}>
      <TouchableOpacity
        style={addStyle.addWrapper}
        onPress={() => {
          props.onPress();
        }}>
        <Image
          source={require('../../assets/Icons/plus.png')}
          style={{
            width: 20,
            height: 20,
          }}></Image>
      </TouchableOpacity>
    </View>
  );
};

const addStyle = StyleSheet.create({
  wrapper: {
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: StyleConstants.margins.medium,
  },
  addWrapper: {
    padding: StyleConstants.padding.medium,
    backgroundColor: StyleConstants.colors.blue.dark,
    borderRadius: StyleConstants.border.radius.small,
    height: 60,
  },
});

export default AddReminderBtn;
