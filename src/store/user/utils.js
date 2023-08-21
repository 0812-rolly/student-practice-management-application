import { loginUserAction, logoutUserAction } from 'store/user/actions/actions';
import { ACCESS_TOKEN } from 'common/config/index';
import textInfo from 'common/language/textInfo';

import decode from 'jwt-decode';

export const loginUser = (token) => (dispatch) => {
  const tokenDecode = decode(token);
  window.localStorage.setItem(ACCESS_TOKEN, token);
  const role = tokenDecode.authorities[0];

  dispatch(loginUserAction({
    isUserLogged: true,
    role,
    idProfile: tokenDecode.sub,
    siteText: role === 'ROLE_HR' || role === 'ROLE_MENTOR' ? textInfo.eng : textInfo.ru,
  }));
};

export const logoutUser = () => (dispatch) => {
  window.localStorage.removeItem(ACCESS_TOKEN);
  dispatch(logoutUserAction({
    isUserLogged: false,
    role: null,
    idProfile: null,
    siteText: textInfo.ru,
  }));
};
