import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';

import StyleConstants from '../../StyleConstants';
import styles from '../../styles';

const TipItemDetail = props => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

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

export default TipItemDetail;
