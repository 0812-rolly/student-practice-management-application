import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
  type, title, className, onClick,
}) => (
  <button
    className={`button common-button ${className}`}
    type={type === 'submit' ? 'submit' : 'button'}
    onClick={onClick}
  >
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  className: '',
  onClick: () => {},
};

export default Button;
