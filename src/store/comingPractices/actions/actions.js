import { FETCH_PRACTICES_PENDING, FETCH_PRACTICES_SUCCESS, FETCH_PRACTICES_ERROR } from './actionTypes';

export function fetchPracticesPending() {
  return {
    type: FETCH_PRACTICES_PENDING,
  };
}

export function fetchPracticesSuccess(practices) {
  return {
    type: FETCH_PRACTICES_SUCCESS,
    practices,
  };
}

export function fetchPracticesError(error) {
  return {
    type: FETCH_PRACTICES_ERROR,
    error,
  };
}
