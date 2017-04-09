import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { login } from './login-reducer';

const reducers = combineReducers({
  routing: routerReducer,
  login
})

export default reducers