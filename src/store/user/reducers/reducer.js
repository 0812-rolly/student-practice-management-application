import { LOGIN_USER, LOGOUT_USER } from '../actions/actionTypes';
import initialState from '../../initialState';

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isUserLogged: action.payload.isUserLogged,
        role: action.payload.role,
        idProfile: action.payload.idProfile,
        siteText: action.payload.siteText,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isUserLogged: action.payload.isUserLogged,
        role: action.payload.role,
        idProfile: action.payload.idProfile,
        siteText: action.payload.siteText,
      };
    default: return state;
  }
};

export default userReducer;
