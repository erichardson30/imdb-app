import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE, UPDATE_QUERY, CLEAR_SEARCH } from '../constants';

export const search = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_REQUEST :
      return {...state,isFetching: true}
    case SEARCH_SUCCESS :
      return {...state, isFetching: false, results: action.results}
    case SEARCH_FAILURE :
      return {...state, isFetching: false, error: action.error}
    case UPDATE_QUERY : 
      return {...state, query: action.query}
    case CLEAR_SEARCH :
      return {...state, results: null}

    default:
      return state
  }
}