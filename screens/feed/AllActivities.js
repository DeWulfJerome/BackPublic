import React from 'react';
import {View} from 'react-native';

import AllActivityList from '../../Views/feed/AllActivityList';

const AllActivities = props => {
  return (
    <View style={{flex: 1}}>
      <AllActivityList navProps={props.navigation} />
    </View>
  );
};

export default AllActivities;
