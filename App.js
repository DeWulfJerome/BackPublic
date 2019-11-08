import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducers from './Model/rootReducer';

//fix font bug
import TextWrapper from './utils/TextWrapper';
TextWrapper();

import AppContainer from './navigation/Appstack';

const middleWare = applyMiddleware(thunk);
const store = createStore(reducers, middleWare);

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer></AppContainer>
    </Provider>
  );
};

export default App;
