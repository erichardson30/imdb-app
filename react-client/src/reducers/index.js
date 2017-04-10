import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { search } from './search-reducer';

const reducers = combineReducers({
  routing: routerReducer,
  search
})

export default reducers