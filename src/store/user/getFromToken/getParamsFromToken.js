import { ACCESS_TOKEN } from 'common/config/index';
import decode from 'jwt-decode';

export const getDecodedToken = () => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  if (token) {
    const tokenDecode = decode(token);
    return tokenDecode;
  }
  return null;
};

export const getToken = () => (localStorage.getItem(ACCESS_TOKEN));
