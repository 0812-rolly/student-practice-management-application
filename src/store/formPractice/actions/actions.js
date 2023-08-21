import { FETCH_PRACTICE_PENDING, FETCH_PRACTICE_SUCCESS, FETCH_PRACTICE_ERROR } from './actionsTypes';

export function fetchPracticePending() {
  return {
    type: FETCH_PRACTICE_PENDING,
  };
}

export function fetchPracticeSuccess() {
  return {
    type: FETCH_PRACTICE_SUCCESS,
  };
}

export function fetchPracticeError(error) {
  return {
    type: FETCH_PRACTICE_ERROR,
    error,
  };
}
