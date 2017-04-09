import { LOGIN_USER, LOG_OUT_USER } from '../constants';

export const loginUser = () => {
  return {
    type: LOGIN_USER
  }
}
export const logOutUser = () => {
  return {
    type: LOG_OUT_USER
  }
}