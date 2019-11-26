import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import StyleConstants from '../../StyleConstants';

import {getInactiveAdviezen} from '../../controllers/feed/feedActions';

import ListItem from '../../components/Lists/ListItem';
import AllActivityContent from './AllActivityContent';

const AllActivityList = props => {
  const [feed, setFeed] = useState([]);
  const allAdviezen = useSelector(store => store.feedReducer.adviezen);

  useEffect(() => {
    if (allAdviezen.length !== 0) {
      getAdvices();
    }
  }, [allAdviezen]);

  const getAdvices = () => {
    let inactiveAdviezen = getInactiveAdviezen(allAdviezen);
    setFeed(inactiveAdviezen);
  };

  const renderListItems = ({item}) => {
    return (
      <ListItem
        key={item.title}
        onPress={() => {
          props.navProps.navigate('ListItemDetail', {
            title: item.title,
            image: 'weight',
            from: 'AllActivityList',
            advies: item.advies,
            id: item.id,
          });
        }}
        uri={require('../../assets/Glasses/weightLift.png')}
        content={
          <AllActivityContent
            navProps={props.navProps}
            id={item.id}
            title={item.title}
            sub={item.sub}
          />
        }></ListItem>
    );
  };
  return (
    <FlatList
      style={{height: '100%', paddingBottom: StyleConstants.padding.navAvoider}}
      data={feed}
      renderItem={renderListItems}
      keyExtractor={item => item.title}></FlatList>
  );
};

export default AllActivityList;
