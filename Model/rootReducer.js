import {combineReducers} from 'redux';
import authReducer from './reducers/authReducer';
import feedReducer from './reducers/feedReducer';

const rootReducer = combineReducers({
  authReducer,
  feedReducer,
});

export default rootReducer;
