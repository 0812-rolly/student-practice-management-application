const redirectUri = `${process.env.REACT_APP_DOMEN}/oauth2/redirect`;
const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

export const API_BASE_URL = apiBaseUrl;

export const ACCESS_TOKEN = 'accessToken';

export const OAUTH2_REDIRECT_URI = redirectUri;

export const GOOGLE_AUTH_URL = `${apiBaseUrl}/oauth2/authorize/google?redirect_uri=${redirectUri}`;
