import React from 'react';
import {ScrollView} from 'react-native';

import StyleConstants from '../../StyleConstants';

import ListItem from '../../components/Lists/ListItem';
import AllActivityContent from './AllActivityContent';

const AllActivityList = props => {
  const feed = [
    {title: 'Bekken bridge topexpert', sub: '10 min'},
    {title: 'Buikspieren 1', sub: '5 min'},
    {title: '10 000 stappen', sub: 'Hele dag'},
    {title: 'Buikspieren 1', sub: '5 min'},
    {title: '10 000 stappen', sub: 'Hele dag'},
    {title: 'Buikspieren 1', sub: '5 min'},
    {title: '10 000 stappen', sub: 'Hele dag'},
    {title: 'Buikspieren 1', sub: '5 min'},
  ];

  const renderListItems = () => {
    return feed.map((val, index) => {
      return (
        <ListItem
          key={index}
          onPress={() => {
            props.navProps.navigate('ListItemDetail', {
              title: val.title,
              image: 'weight',
              from: 'AllActivityList',
            });
          }}
          uri={require('../../assets/Glasses/weightLift.png')}
          content={
            <AllActivityContent title={val.title} sub={val.sub} />
          }></ListItem>
      );
    });
  };
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: StyleConstants.padding.navAvoider,
      }}>
      {renderListItems()}
    </ScrollView>
  );
};

export default AllActivityList;
