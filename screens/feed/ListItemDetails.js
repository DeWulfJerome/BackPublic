import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';

import StyleConstants from '../../StyleConstants';
import styles from '../../styles';

import {
  setAdviesActivity,
  setAdviesDoneToday,
} from '../../controllers/feed/feedActions';

import Button from '../../components/buttons/Button';

const ListItemDetails = props => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const didActivity = () => {
    setLoading(true);
    setAdviesDoneToday(props.navigation.state.params.id, true, dispatch)
      .then(response => {
        setLoading(false);
        props.navigation.navigate('Feed');
      })
      .catch(err => {
        alert('Something went wrong, try again later');
        console.log(err);
        setLoading(false);
      });
  };

  const activateActivity = () => {
    setLoading(true);
    setAdviesActivity(props.navigation.state.params.id, true, dispatch)
      .then(response => {
        setLoading(false);
        props.navigation.navigate('Feed');
      })
      .catch(err => {
        alert('Something went wrong, try again later');
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    //getImage();
  });

  const getImage = () => {
    // If there is a specific image => get it from wordpress
    console.log(props.navigation.state.params);
  };

  const screenProps = props.navigation.state.params;
  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: StyleConstants.padding.navAvoider}}
      style={detailStyle.container}>
      {screenProps.image && (
        <Image
          source={require('../../tempAssets/images/abzz.png')}
          style={{
            height: 200,
            width: StyleConstants.containerWidth.full,
          }}></Image>
      )}
      <View style={detailStyle.textContainer}>
        <Text
          style={[
            styles.title,
            {color: StyleConstants.colors.black.fontBlack},
          ]}>
          Beschrijving
        </Text>
        <Text style={styles.normalText}>{screenProps.advies}</Text>
      </View>
      <View style={detailStyle.textContainer}>
        {screenProps.from === 'AllActivityList' ? (
          <Button
            filled={true}
            text={'Toevoegen'}
            loading={loading}
            onPress={activateActivity}></Button>
        ) : (
          <Button
            filled={true}
            text={'Voltooid'}
            onPress={didActivity}></Button>
        )}
      </View>
    </ScrollView>
  );
};

const detailStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    alignSelf: 'stretch',
    margin: StyleConstants.margins.medium,
  },
});

export default ListItemDetails;
