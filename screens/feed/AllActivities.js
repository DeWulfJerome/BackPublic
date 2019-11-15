import React from 'react';
import {View} from 'react-native';

import AllActivityList from '../../Views/feed/AllActivityList';

const AllActivities = props => {
  return (
    <View>
      <AllActivityList navProps={props.navigation} />
    </View>
  );
};

export default AllActivities;
