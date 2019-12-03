import React from 'react';
import {
  View,
  TouchableOpacity,
  NativeModules,
  StyleSheet,
  findNodeHandle,
} from 'react-native';
import StyleConstants from '../../StyleConstants';
import {connect} from 'react-redux';

import {setAdviesActivity} from '../../controllers/feed/feedActions';

const UIManager = NativeModules.UIManager;

class AndroidListItemDetailDots extends React.Component {
  onMenuPressed = labels => {
    UIManager.showPopupMenu(
      findNodeHandle(this.menu),
      labels,
      () => {},
      (result, index) => {
        if (index === 0) {
          alert('set cue');
        }
        if (index === 1) {
          setAdviesActivity(this.props.id, false, this.props.dispatch)
            .then(response => {
              this.props.navProps.navigate('Feed');
            })
            .catch(err => {
              console.log(err);
            });
        }
      },
    );
  };
  render() {
    const {labels} = this.props;
    return (
      <View style={{flexDirection: 'row'}}>
        <View>
          <View
            ref={c => (this.menu = c)}
            style={{
              backgroundColor: 'transparent',
              width: 1,
              height: StyleSheet.hairlineWidth,
            }}
          />

          <TouchableOpacity onPress={() => this.onMenuPressed(labels)}>
            <View style={headerDotStyle.containerStyle}>
              <View style={headerDotStyle.dotStyle}></View>
              <View style={headerDotStyle.dotStyle}></View>
              <View style={headerDotStyle.dotStyle}></View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const headerDotStyle = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',

    padding: StyleConstants.margins.medium,
  },
  dotStyle: {
    backgroundColor: StyleConstants.colors.black.fontBlack,
    height: 5,
    width: 5,
    borderRadius: 5,
    margin: 1,
  },
});

export default connect(null)(AndroidListItemDetailDots);
