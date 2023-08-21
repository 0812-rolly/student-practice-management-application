import { GET_PRACTICE_PENDING, GET_PRACTICE_SUCCESS, GET_PRACTICE_ERROR } from '../actions/actionTypes';
import initialState from '../../initialState';

const practiceReducer = (state = initialState.practice, action) => {
  switch (action.type) {
    case GET_PRACTICE_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_PRACTICE_SUCCESS:
      return {
        ...state,
        pending: false,
        practice: action.practice,
      };
    case GET_PRACTICE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default: return state;
  }
};

export default practiceReducer;
