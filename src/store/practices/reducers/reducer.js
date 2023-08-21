import { FETCH_PRACTICES_PENDING, FETCH_PRACTICES_SUCCESS, FETCH_PRACTICES_ERROR } from '../actions/actionTypes';
import initialState from '../../initialState';

const practicesReducer = (state = initialState.practices, action) => {
  switch (action.type) {
    case FETCH_PRACTICES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_PRACTICES_SUCCESS:
      return {
        ...state,
        pending: false,
        practices: action.practices,
      };
    case FETCH_PRACTICES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default: return state;
  }
};

export default practicesReducer;
