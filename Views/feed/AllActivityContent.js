import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useDispatch} from 'react-redux';

import {setAdviesActivity} from '../../controllers/feed/feedActions';

import StyleConstants from '../../StyleConstants';

const FeedContent = props => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const activateActivity = () => {
    setLoading(true);
    setAdviesActivity(props.id, true, dispatch)
      .then(() => {
        setLoading(false);
        props.navProps.navigate('Feed');
      })
      .catch(err => {
        alert('Something went wrong, please try again later');
        setLoading(false);
      });
  };

  const renderButton = loading => {
    return loading ? (
      <View style={[contentStyle.buttonWrapper, {padding: 5}]}>
        <ActivityIndicator size="small" color="#fff"></ActivityIndicator>
      </View>
    ) : (
      <TouchableOpacity
        style={contentStyle.buttonWrapper}
        onPress={activateActivity}>
        <Image
          source={require('../../assets/Icons/plus.png')}
          style={{height: 10, width: 10}}></Image>
      </TouchableOpacity>
    );
  };

  return (
    <View style={contentStyle.outerWrapper}>
      <View style={contentStyle.wrapperStyle}>
        <Text style={contentStyle.title}>{props.title}</Text>
        <Text style={contentStyle.subText}>{props.sub}</Text>
      </View>
      {renderButton(loading)}
    </View>
  );
};

const contentStyle = StyleSheet.create({
  outerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperStyle: {
    width: '85%',
  },
  title: {
    fontSize: StyleConstants.font.sizes.medium,
    color: StyleConstants.colors.black.fontBlack,
  },
  subText: {
    fontSize: StyleConstants.font.sizes.small,
    color: StyleConstants.colors.black.fontBlack,
  },
  buttonWrapper: {
    backgroundColor: StyleConstants.colors.blue.dark,
    padding: StyleConstants.padding.small,
    borderRadius: StyleConstants.border.radius.full,
  },
});

export default FeedContent;
