import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import StyleConstants from '../StyleConstants';
import styles from '../styles';

import TabBar from './TabBar';
import TabBarIcon from './TabBarIcon';
import Feed from '../screens/main/Feed';
import Profile from '../screens/main/Profile';
import Badges from '../screens/main/Badges';
import Questions from '../screens/main/Questions';
import Stop from '../screens/main/Stop';
import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';
import Loading from '../screens/auth/Loading';
import Settings from '../screens/profile/Settings';

import ListItemDetails from '../screens/feed/ListItemDetails';
import AllActivities from '../screens/feed/AllActivities';

import HeaderDots from '../components/buttons/HeaderDots';
import ListItemDetailDotsContent from '../Views/header/ListItemDetailDotsContent';
import ProfileDotsContent from '../Views/header/ProfileDotsContent';

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

const QuestionsStack = createStackNavigator({
  Questions: {
    screen: Questions,
    navigationOptions: ({navigation}) => ({
      title: 'Questions',
      header: null,
    }),
  },
});

const StopStack = createStackNavigator({
  Stop: {
    screen: Stop,
    navigationOptions: ({navigation}) => ({
      title: 'Stop',
      header: null,
    }),
  },
});

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({navigation}) => ({
      title: 'Profiel',
      headerRight: () => {
        return (
          <HeaderDots>
            <ProfileDotsContent navProps={navigation}></ProfileDotsContent>
          </HeaderDots>
        );
      },
      headerStyle: [
        {
          backgroundColor: StyleConstants.colors.blue.light,
          height: 60,
          borderBottomWidth: 0,
        },
        StyleConstants.shadow.top,
      ],
      headerTitleStyle: [
        styles.title,
        {color: StyleConstants.colors.black.fontBlack},
      ],
    }),
  },
  Settings: {
    screen: Settings,
    navigationOptions: ({navigation}) => ({
      title: 'Instellingen',
      headerStyle: [
        {
          backgroundColor: StyleConstants.colors.blue.light,
          height: 60,
          borderBottomWidth: 0,
        },
        StyleConstants.shadow.top,
      ],
      headerTitleStyle: [
        styles.title,
        {color: StyleConstants.colors.black.fontBlack},
      ],
    }),
  },
});

const FeedStack = createStackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: () => ({
      title: 'Feed',
      headerStyle: [
        {
          backgroundColor: StyleConstants.colors.blue.light,
          height: 60,
          borderBottomWidth: 0,
        },
        StyleConstants.shadow.top,
      ],
      headerTitleStyle: [
        styles.title,
        {color: StyleConstants.colors.black.fontBlack},
      ],
    }),
  },
  ListItemDetail: {
    screen: ListItemDetails,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.title || 'Details'}`,
      headerRight: () => {
        if (navigation.state.params.from !== 'AllActivityList') {
          return (
            <HeaderDots>
              <ListItemDetailDotsContent
                navProps={navigation}
                id={navigation.state.params.id}></ListItemDetailDotsContent>
            </HeaderDots>
          );
        }
      },
      headerStyle: [
        {
          backgroundColor: StyleConstants.colors.blue.light,
          height: 60,
          borderBottomWidth: 0,
        },
        StyleConstants.shadow.top,
      ],
      headerTitleStyle: [
        styles.title,
        {color: StyleConstants.colors.black.fontBlack},
      ],
    }),
  },
  AllActivities: {
    screen: AllActivities,
    navigationOptions: ({navigation}) => ({
      title: 'Jouw activiteiten',
      headerStyle: [
        {
          backgroundColor: StyleConstants.colors.blue.light,
          height: 60,
          borderBottomWidth: 0,
        },
        StyleConstants.shadow.top,
      ],
      headerTitleStyle: [
        styles.title,
        {color: StyleConstants.colors.black.fontBlack},
      ],
    }),
  },
});

const MainStack = createBottomTabNavigator(
  {
    Badges: Badges,
    Feed: FeedStack,
    Profiel: ProfileStack,
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
      QuestionSwitch: QuestionsStack,
      StopScreen: StopStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

export default AppContainer;
