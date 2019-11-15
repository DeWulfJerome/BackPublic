import React from 'react';
import {View, Image, Text, StyleSheet, ScrollView} from 'react-native';

import StyleConstants from '../../StyleConstants';
import styles from '../../styles';

import Button from '../../components/buttons/Button';

const ListItemDetails = props => {
  const didActivity = () => {
    console.log('did this ac');
  };

  const activateActivity = () => {
    console.log('activate this ac');
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
        <Text style={styles.normalText}>
          In ruglig. Strek je benen en steun met je hielen op een stoel of
          zitbal. Kantel je bekken, trek je navel naar je rug toe en knijp je je
          billen samen. Hou de spanning in je buik- en bilspieren vast zodat je
          rug een rechte plank blijft. Strek traag één been naar boven. Hou de
          spanning in je buik- en bilspieren vast zodat je rug een rechte plank
          blijft. Je schouders en hals blijven ontspannen. Blijf rustig
          ademhalen. Tel traag tot 10. Herhaal 3 maal.
        </Text>
      </View>
      <View style={detailStyle.textContainer}>
        {screenProps.from === 'AllActivityList' ? (
          <Button
            filled={true}
            text={'Toevoegen'}
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
