import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import StyleConstants from '../StyleConstants';

const TabBar = props => {
  const {
    renderIcon,
    getLabelText,
    activeTintColor,
    inactiveTintColor,
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    navigation,
  } = props;

  const {routes, index: activeRouteIndex} = navigation.state;

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: StyleConstants.padding.small,
          backgroundColor: StyleConstants.colors.blue.light,
          position: 'absolute',
          bottom: StyleConstants.margins.medium,
          left: StyleConstants.margins.medium,
          right: StyleConstants.margins.medium,
          borderRadius: StyleConstants.border.radius.medium,
        },
        StyleConstants.shadow.top,
      ]}>
      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex;
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;
        return (
          <TouchableOpacity
            style={{
              width: '33%',
              alignItems: 'center',
            }}
            key={routeIndex}
            onPress={() => {
              onTabPress({route});
            }}
            onLongPress={() => {
              onTabLongPress({route});
            }}
            accessibilityLabel={getAccessibilityLabel({route})}>
            {renderIcon({route, focused: isRouteActive, tintColor})}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
