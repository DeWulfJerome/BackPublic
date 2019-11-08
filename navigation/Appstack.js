import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Feed from '../screens/app/Feed';
import Login from '../screens/auth/Login';
import Loading from '../screens/auth/Loading';

const AuthStack = createStackNavigator({
  Loading: {
    screen: Loading,
    navigationOptions: () => ({
      title: 'Loading',
      header: null,
    }),
  },
  Login: {
    screen: Login,
    navigationOptions: () => ({
      title: 'Login',
      header: null,
    }),
  },
});

const MainStack = createBottomTabNavigator(
  {
    Feed: Feed,
  },
  {
    initialRouteName: 'Feed',
  },
);

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      App: MainStack,
    },
    {
      initialRouteName: 'Auth',
    },
  ),
);

export default AppContainer;
