import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {StatusBar} from 'react-native';

import {configureNotifications} from './controllers/feed/notificationLogic';

import reducers from './Model/rootReducer';
import StyleConstants from './StyleConstants';

//fix font bug
import TextWrapper from './utils/TextWrapper';
TextWrapper();

import AppContainer from './navigation/Appstack';

const middleWare = applyMiddleware(thunk);
const store = createStore(reducers, middleWare);

const App = () => {
  // Disable warnings
  useEffect(() => {
    console.disableYellowBox = true;
    configureNotifications();
  });

  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor={StyleConstants.colors.blue.light}
        barStyle="dark-content"
      />
      <AppContainer></AppContainer>
    </Provider>
  );
};

export default App;
