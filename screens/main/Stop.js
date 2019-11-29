import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

import StyleConstants from '../../StyleConstants';
import styles from '../../styles';

import Button from '../../components/buttons/Button';

const Stop = props => {
  return (
    <ScrollView contentContainerStyle={stopStyle.stopScreen}>
      <Image
        source={require('../../assets/Logo/logo.png')}
        style={StyleConstants.logoSizes.large}></Image>
      <View style={stopStyle.textWrapper}>
        <Text style={styles.title}>STOP!</Text>
        <Text style={[styles.subTitle, stopStyle.subTitle]}>
          Je rugpijn is waarschijnlijk te wijten aan een duidelijke pathologie.
          Het Back-Up Plan is geen goed idee op dit ogenblik. Raadpleeg zo snel
          mogelijk je arts!
        </Text>
      </View>
      <Image
        source={require('../../assets/Glasses/bucket-flowing.png')}
        style={stopStyle.bucket}></Image>
      <View style={stopStyle.buttonWrapper}>
        <Button
          filled={true}
          text={'Vind een specialist in mijn buurt'}
          loading={false}
          onPress={() => {
            console.log('specialist zoeken');
          }}></Button>
        <Text style={[stopStyle.or, styles.subTitle]}>Of</Text>
        <Button
          filled={false}
          text={'Vraag een refund aan'}
          loading={false}
          onPress={() => {
            console.log('refund');
          }}></Button>
      </View>
    </ScrollView>
  );
};

const stopStyle = StyleSheet.create({
  stopScreen: {
    flex: 1,
    backgroundColor: StyleConstants.colors.white,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textWrapper: {
    margin: StyleConstants.margins.medium,
    alignItems: 'center',
    textAlign: 'center',
  },
  subTitle: {
    lineHeight: StyleConstants.font.lineheight.normal,
    textAlign: 'center',
    marginTop: StyleConstants.margins.small,
  },
  or: {
    marginBottom: StyleConstants.margins.medium,
  },
  buttonWrapper: {
    width: '100%',
    paddingRight: StyleConstants.padding.medium,
    paddingLeft: StyleConstants.padding.medium,
    alignItems: 'center',
  },
  bucket: {
    height: 120,
    width: 120,
    marginTop: StyleConstants.margins.medium,
    marginBottom: StyleConstants.margins.large,
  },
});

export default Stop;
