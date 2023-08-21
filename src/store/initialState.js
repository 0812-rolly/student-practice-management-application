import textInfo from 'common/language/textInfo';
import { getDecodedToken, getToken } from './user/getFromToken/getParamsFromToken';

const decodedToken = getDecodedToken();
const token = getToken();
const getText = () => {
  const role = decodedToken?.authorities[0];
  return role === 'ROLE_HR' || role === 'ROLE_MENTOR' ? textInfo.eng : textInfo.ru;
};

export default {
  user: {
    isUserLogged: !!token,
    role: decodedToken?.authorities[0],
    idProfile: decodedToken?.sub,
    siteText: getText(),
  },
  practices: {
    pending: false,
    practices: [],
    error: null,
  },
  locations: {
    pending: false,
    locations: [],
    error: null,
  },
  request: {
    pending: false,
    error: null,
  },
  practice: {
    pending: false,
    practice: null,
    error: null,
  },
};
