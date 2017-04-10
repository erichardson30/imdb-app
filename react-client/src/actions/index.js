import axios from 'axios';
import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE, UPDATE_QUERY, CLEAR_SEARCH } from '../constants';
const apiUrl = 'http://localhost:9000/search?title=';

export const updateQuery = (query) => {
  return {
    type: UPDATE_QUERY,
    query
  }
}

export const searchSuccess = (results) => {
  return {
    type: SEARCH_SUCCESS,
    results
  }
}

export const searchFailure = (error) => {
  return {
    type: SEARCH_FAILURE,
    error
  }
}

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

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH
  }
}