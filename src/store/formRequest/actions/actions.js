import { FETCH_REQUEST_PENDING, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_ERROR } from './actionsTypes';

export function fetchRequestPending() {
  return {
    type: FETCH_REQUEST_PENDING,
  };
}

export function fetchRequestSuccess() {
  return {
    type: FETCH_REQUEST_SUCCESS,
  };
}

export function fetchRequestError(error) {
  return {
    type: FETCH_REQUEST_ERROR,
    error,
  };
}
