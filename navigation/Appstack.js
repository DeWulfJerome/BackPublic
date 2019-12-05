import React from 'react';
import {Platform} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';

import StyleConstants from '../StyleConstants';
import Copy from '../assets/Copy';
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
import Cues from '../screens/profile/Cues';
import Tips from '../screens/profile/Tips';

import ListItemDetails from '../screens/feed/ListItemDetails';
import AllActivities from '../screens/feed/AllActivities';
import TipItemDetail from '../screens/profile/TipItemDetail';

import HeaderDots from '../components/buttons/HeaderDots';
import ListItemDetailDotsContent from '../Views/header/ListItemDetailDotsContent';
import ProfileDotsContent from '../Views/header/ProfileDotsContent';

import AndroidListItemDetailDots from '../Views/header/AndroidListItemDetailDots';
import AndroidProfileDots from '../Views/header/AndroidProfileDots';

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

const ProfileTabs = createMaterialTopTabNavigator(
  {
    Tips: {
      screen: Tips,
      navigationOptions: () => ({
        title: 'Tips',
      }),
    },
    Cues: {
      screen: Cues,
      navigationOptions: () => ({
        title: 'Herinneringen',
      }),
    },
  },
  {
    tabBarOptions: {
      activeTintColor: StyleConstants.colors.black.fontBlack,
      inactiveTintColor: StyleConstants.colors.black.subFontBlack,
      pressColor: StyleConstants.colors.blue.medium,
      indicatorStyle: {
        backgroundColor: StyleConstants.colors.blue.dark,
      },
      style: [
        {
          backgroundColor: StyleConstants.colors.blue.light,
          borderBottomWidth: 0,
        },
        StyleConstants.shadow.top,
      ],
    },
  },
);

const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileTabs,
    navigationOptions: ({navigation}) => ({
      title: 'Profiel',
      headerRight: () => {
        if (Platform.OS === 'ios') {
          return (
            <HeaderDots>
              <ProfileDotsContent navProps={navigation}></ProfileDotsContent>
            </HeaderDots>
          );
        } else {
          return (
            <AndroidProfileDots
              navProps={navigation}
              labels={[
                Copy.NL.profile.settings,
                Copy.NL.profile.logout,
              ]}></AndroidProfileDots>
          );
        }
      },
      headerStyle: [
        {
          backgroundColor: StyleConstants.colors.blue.light,
          height: 60,
          borderBottomWidth: 0,
          elevation: 0,
        },
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
  TipItemDetailScreen: {
    screen: TipItemDetail,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.title || 'Details'}`,

      headerStyle: [
        {
          overflow: 'visible',
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
        if (
          navigation.state.params.from !== 'AllActivityList' &&
          navigation.state.params.from !== 'TipsList'
        ) {
          if (Platform.OS === 'ios') {
            return (
              <HeaderDots>
                <ListItemDetailDotsContent
                  navProps={navigation}
                  id={navigation.state.params.id}></ListItemDetailDotsContent>
              </HeaderDots>
            );
          } else {
            return (
              <AndroidListItemDetailDots
                id={navigation.state.params.id}
                navProps={navigation}
                labels={[
                  Copy.NL.feed.setQ,
                  Copy.NL.feed.remove,
                ]}></AndroidListItemDetailDots>
            );
          }
        }
      },
      headerStyle: [
        {
          overflow: 'visible',
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
      title: 'Mijn activiteiten',
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
