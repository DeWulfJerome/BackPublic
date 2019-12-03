import React from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';

import Copy from '../../assets/Copy';

import {setAdviesActivity} from '../../controllers/feed/feedActions';

import HeaderDotsContent from './HeaderDotsContent';

const ListItemDetailDotsContent = props => {
  const dispatch = useDispatch();

  const deactivateActivity = () => {
    setAdviesActivity(props.id, false, dispatch)
      .then(response => {
        props.navProps.navigate('Feed');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View>
      <HeaderDotsContent
        text={Copy.NL.feed.setQ}
        onPress={() => {
          alert('pressed');
        }}></HeaderDotsContent>
      <HeaderDotsContent
        text={Copy.NL.feed.remove}
        onPress={deactivateActivity}></HeaderDotsContent>
    </View>
  );
};

export default ListItemDetailDotsContent;
