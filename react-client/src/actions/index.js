import axios from 'axios';
import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE, UPDATE_QUERY, CLEAR_SEARCH } from '../constants';
const apiUrl = 'http://localhost:9000/search?title=';

// updates the query string
export const updateQuery = (query) => {
  return {
    type: UPDATE_QUERY,
    query
  }
}

// search to IMDB was successful
export const searchSuccess = (results) => {
  return {
    type: SEARCH_SUCCESS,
    results
  }
}

// search to IMDB was a failure
export const searchFailure = (error) => {
  return {
    type: SEARCH_FAILURE,
    error
  }
}

// search to IMDB is initiated
export const searchRequest = (title) => {
  return (dispatch) => {
    dispatch({type: SEARCH_REQUEST});
    return axios.get(apiUrl + title)
      .then(response => {
        dispatch(searchSuccess(response));
      })
      .catch(err => {
        dispatch(searchFailure(err));
      })
  }
}

// clears search results
export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH
  }
}