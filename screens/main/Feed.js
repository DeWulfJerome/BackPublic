import React from 'react';
import {View, Text} from 'react-native';

import StyleConstants from '../../StyleConstants';

import FAB from '../../components/buttons/FAB';
import FeedList from '../../Views/feed/FeedList';

const Feed = props => {
  return (
    <View style={{flex: 1}}>
      <FeedList navProps={props.navigation}></FeedList>
      <View
        style={{
          position: 'absolute',
          bottom: 120,
          right: StyleConstants.margins.medium,
          zIndex: 9999999,
        }}>
        <FAB
          onPress={() => {
            props.navigation.navigate('AllActivities');
          }}></FAB>
      </View>
    </View>
  );
};

export default Feed;
