import React from 'react';
import { Link } from 'react-router-dom';
import './LinkedLogo.scss';

const LinkedLogo = () => (
  <Link
    className="linked-logo link"
    to="/"
    onClick={() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }}
  >
    <img className="linked-logo__image" src="/images/logo.png" width="40" height="40" alt="Student Practice" />
    <p className="linked-logo__title">Student Practice</p>
  </Link>
);

export default LinkedLogo;
