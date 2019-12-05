import React from 'react';
import {View, Text} from 'react-native';

import TipsList from '../../Views/profile/TipsList';

const Tips = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TipsList></TipsList>
    </View>
  );
};

export default Tips;
