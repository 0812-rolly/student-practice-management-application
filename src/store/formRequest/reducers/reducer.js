import { FETCH_REQUEST_PENDING, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_ERROR } from '../actions/actionsTypes';
import initialState from '../../initialState';

const requestReducer = (state = initialState.request, action) => {
  switch (action.type) {
    case FETCH_REQUEST_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_REQUEST_SUCCESS:
      return {
        ...state,
        pending: false,
      };
    case FETCH_REQUEST_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default: return state;
  }
};

export default requestReducer;
