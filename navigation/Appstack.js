import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import TabBar from './TabBar';
import TabBarIcon from './TabBarIcon';
import Feed from '../screens/app/Feed';
import Profile from '../screens/app/Profile';
import Badges from '../screens/app/Badges';
import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';
import Loading from '../screens/auth/Loading';

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: () => ({
      title: 'Login',
      header: null,
    }),
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: () => ({
      title: 'SignUp',
      header: null,
    }),
  },
});

const MainStack = createBottomTabNavigator(
  {
    Badges: Badges,
    Feed: Feed,
    Profiel: Profile,
  },
  {
    initialRouteName: 'Feed',
    tabBarComponent: TabBar,
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        return (
          <TabBarIcon
            route={routeName}
            name={routeName}
            active={focused}></TabBarIcon>
        );
      },
    }),
  },
);

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: Loading,
      Auth: AuthStack,
      App: MainStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

export default AppContainer;
