import { FETCH_LOCATIONS_PENDING, FETCH_LOCATIONS_SUCCESS, FETCH_LOCATIONS_ERROR } from '../actions/actionsTypes';
import initialState from '../../initialState';

const locationsReducer = (state = initialState.locations, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_LOCATIONS_SUCCESS:
      return {
        ...state,
        pending: false,
        locations: action.locations,
      };
    case FETCH_LOCATIONS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default: return state;
  }
};

export default locationsReducer;
