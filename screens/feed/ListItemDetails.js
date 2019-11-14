import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const getIcon = type => {
  let icon;
  switch (type) {
    case 'weight':
      icon = require('../../assets/Glasses/weightLift.png');
      return icon;
  }
};

const ListItemDetails = props => {
  const screenProps = props.navigation.state.params;
  return (
    <View style={detailStyle.container}>
      {screenProps.image && (
        <Image
          source={getIcon(screenProps.image)}
          style={{height: 50, width: 50}}></Image>
      )}
      <Text>Test</Text>
    </View>
  );
};

const detailStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListItemDetails;
