import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

const Track = props => {
  const [trackWidth, setTrackWidth] = useState(0);
  const onLayOut = e => {
    setTrackWidth(e.nativeEvent.layout.width);
  };
  return (
    <View
      style={[
        trackStyle.track,
        props.trackBackground && {backgroundColor: props.trackBackground},
      ]}
      onLayout={onLayOut}>
      {/* props.children */}
      <View
        style={[
          trackStyle.track,
          trackStyle.filledTrack,
          {width: trackWidth * (props.currentCount / props.totalCount)},
          props.filledTrackBackground && {
            backgroundColor: props.filledTrackBackground,
          },
        ]}></View>
    </View>
  );
};

const trackStyle = StyleSheet.create({
  track: {
    backgroundColor: '#F1F9FF',
    height: 15,
    alignSelf: 'stretch',
    borderRadius: 10,
    position: 'relative',
  },
  filledTrack: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#6692C1',
    margin: 0,
  },
});

export default Track;
