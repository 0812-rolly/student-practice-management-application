import { LOGIN_USER, LOGOUT_USER } from './actionTypes';

export function loginUserAction(payload) {
  return {
    type: LOGIN_USER,
    payload,
  };
}

export function logoutUserAction(payload) {
  return {
    type: LOGOUT_USER,
    payload,
  };
}
