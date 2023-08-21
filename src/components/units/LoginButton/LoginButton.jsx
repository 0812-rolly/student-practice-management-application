import React from 'react';
import { GOOGLE_AUTH_URL } from 'common/config';
import './LoginButton.scss';

const LoginButton = () => (
  <div className="login">
    <a className="login__button-google" href={GOOGLE_AUTH_URL}>
      <img className="login__image-google" src="/images/google-logo.png" alt="Google" />
      Sign in with Google
    </a>
  </div>
);

export default LoginButton;
