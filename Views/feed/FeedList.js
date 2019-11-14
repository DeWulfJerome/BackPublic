import React from 'react';
import {ScrollView} from 'react-native';

import ListItem from '../../components/Lists/ListItem';
import FeedContent from './FeedContent';

const FeedList = props => {
  const feed = [
    {title: '10 000 stappen', sub: 'Hele dag'},
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
            });
          }}
          uri={require('../../assets/Glasses/weightLift.png')}
          content={<FeedContent title={val.title} sub={val.sub} />}></ListItem>
      );
    });
  };
  return (
    <ScrollView contentContainerStyle={{paddingBottom: 100}}>
      {renderListItems()}
    </ScrollView>
  );
};

export default FeedList;
