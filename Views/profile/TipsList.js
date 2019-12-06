import React, {useState, useEffect} from 'react';
import {FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';

import StyleConstants from '../../StyleConstants';

import {getUserTips} from '../../controllers/profile/profileActions';
import {getIllustration} from '../../assets/Glasses/getIllustration';

import ListItem from '../../components/Lists/ListItem';
import TipsContent from './TipsContent';

const TipsList = props => {
  const [tips, setTips] = useState([]);
  const allAdviezen = useSelector(store => store.feedReducer.adviezen);

  useEffect(() => {
    if (allAdviezen !== 0) {
      getTips();
    }
  }, [allAdviezen]);

  const getTips = () => {
    let myTips = getUserTips(allAdviezen);
    setTips(myTips);
  };

  const renderListItems = ({item}) => {
    return (
      <ListItem
        key={item.title}
        done={item.doneToday}
        onPress={() => {
          props.navProps.navigate('TipItemDetailScreen', {
            title: item.title,
            image: 'weight',
            from: 'TipsList',
            advies: item.advies,
            id: item.id,
          });
        }}
        uri={getIllustration(item.category)}
        content={<TipsContent title={item.title} sub={item.sub} />}></ListItem>
    );
  };
  return (
    <FlatList
      contentContainerStyle={{paddingBottom: StyleConstants.padding.navAvoider}}
      style={{flex: 1}}
      data={tips}
      renderItem={renderListItems}
      keyExtractor={item => item.title}></FlatList>
  );
};

export default TipsList;
