import { LOGIN_USER, LOG_OUT_USER } from '../constants';

export const login = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER :
      return {...state, loggedIn: true}
      case LOG_OUT_USER :
      return {...state, loggedIn: false}

    default:
      return state
  }
}