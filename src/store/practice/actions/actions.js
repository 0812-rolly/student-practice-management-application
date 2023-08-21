import { GET_PRACTICE_PENDING, GET_PRACTICE_SUCCESS, GET_PRACTICE_ERROR } from './actionTypes';

export function getPracticePending() {
  return {
    type: GET_PRACTICE_PENDING,
  };
}

export function getPracticeSuccess(practice) {
  return {
    type: GET_PRACTICE_SUCCESS,
    practice,
  };
}

export function getPracticeError(error) {
  return {
    type: GET_PRACTICE_ERROR,
    error,
  };
}
