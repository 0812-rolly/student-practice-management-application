import React from 'react';
import LoginButton from '../../units/LoginButton/LoginButton';
import './Login.scss';

function Login() {
  return (
    <div className="login-page">
      <div className="login-page__header">
        <svg className="login-page__icon" viewBox="0 0 512 512">
          <linearGradient id="gradient" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffa600" />
            <stop offset="50%" stopColor="#fa5b33" />
            <stop offset="100%" stopColor="#ffa600" />
          </linearGradient>
          <path id="background" d="m512 256c0 141.386719-114.613281 256-256 256s-256-114.613281-256-256 114.613281-256 256-256 256 114.613281 256 256zm0 0" />
          <path id="person" d="m314.203125 247.9375c23.515625-17.710938 38.75-45.851562 38.75-77.488281 0-53.457031-43.492187-96.949219-96.953125-96.949219-53.457031 0-96.949219 43.492188-96.949219 96.949219 0 31.636719 15.230469 59.777343 38.746094 77.488281-62.960937 23.632812-107.894531 84.445312-107.894531 155.5625h30c0-75.046875 61.054687-136.097656 136.101562-136.097656 75.042969 0 136.097656 61.050781 136.097656 136.097656h30c-.003906-71.117188-44.933593-131.929688-107.898437-155.5625zm-125.152344-77.488281c0-36.917969 30.03125-66.949219 66.949219-66.949219s66.949219 30.03125 66.949219 66.949219-30.03125 66.953125-66.949219 66.953125-66.949219-30.035156-66.949219-66.953125zm0 0" />
        </svg>
        <h2 className="login-page__title">Welcome to Student Practice!</h2>
        <span className="login-page__subtitle">Please sign in to your accounts to start using the application</span>
      </div>
      <LoginButton />
    </div>
  );
}

export default Login;
