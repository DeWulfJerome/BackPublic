import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import StyleConstants from '../../StyleConstants';

import {getActiveAdviezen} from '../../controllers/feed/feedActions';
import {getIllustration} from '../../assets/Glasses/getIllustration';

import ListItem from '../../components/Lists/ListItem';
import FeedContent from './FeedContent';

const FeedList = props => {
  const [feed, setFeed] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const allAdviezen = useSelector(store => store.feedReducer.adviezen);

  useEffect(() => {
    if (allAdviezen !== 0) {
      getFeed();
    }
  }, [allAdviezen]);

  const getFeed = () => {
    let activeAdviezen = getActiveAdviezen(allAdviezen);
    setFeed(activeAdviezen);
  };

  const renderListItems = ({item}) => {
    return (
      <ListItem
        key={item.title}
        done={item.doneToday}
        onPress={() => {
          props.navProps.navigate('ListItemDetail', {
            title: item.title,
            image: 'weight',
            from: 'FeedList',
            advies: item.advies,
            id: item.id,
          });
        }}
        uri={getIllustration(item.category)}
        content={<FeedContent title={item.title} sub={item.sub} />}></ListItem>
    );
  };
  return (
    <FlatList
      style={{height: '100%', paddingBottom: StyleConstants.padding.navAvoider}}
      data={feed}
      refreshing={refreshing}
      onRefresh={() => {
        setRefreshing(true);
        console.log('qsdf');
        setRefreshing(false);
      }}
      renderItem={renderListItems}
      keyExtractor={item => item.title}></FlatList>
  );
};

export default FeedList;
