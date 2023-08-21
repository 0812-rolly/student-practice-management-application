import textInfo from 'common/language/textInfo';

export const ROLES = {
  MENTOR: 'ROLE_MENTOR',
  USER: 'ROLE_USER',
  HR: 'ROLE_HR',
};

const text = textInfo.ru.navBar;

export const CONFIG = {
  ROLE_USER: [{
    title: text.profile,
    url: '/profile',
  }],
  ROLE_MENTOR: [{
    title: 'Profile',
    url: '/profile',
  }],
  ROLE_HR: [{
    title: 'Profile',
    url: '/profile',
  },
  {
    title: 'Practices',
    url: '/practices',
  }],
};
