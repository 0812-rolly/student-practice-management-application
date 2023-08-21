import { FETCH_PRACTICE_PENDING, FETCH_PRACTICE_SUCCESS, FETCH_PRACTICE_ERROR } from '../actions/actionsTypes';
import initialState from '../../initialState';

const requestReducer = (state = initialState.request, action) => {
  switch (action.type) {
    case FETCH_PRACTICE_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_PRACTICE_SUCCESS:
      return {
        ...state,
        pending: false,
      };
    case FETCH_PRACTICE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default: return state;
  }
};

export default requestReducer;
