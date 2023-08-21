import React from 'react';
import PropTypes from 'prop-types';
import Asterisk from 'components/units/Asterisk/Asterisk';
import './Input.scss';

const Input = ({
  label, type, className, name, placeholder, value, onChange, displayAsterisk, fileInfo,
}) => (
  <div className="input-wrapper">
    <label className="label" htmlFor={name}>
      {label}
      {displayAsterisk && <Asterisk />}
    </label>
    <input
      className={`input ${className}`}
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    {type === 'file' ? <p className="input__file-info">{fileInfo}</p> : ''}
  </div>
);

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  displayAsterisk: PropTypes.bool,
  fileInfo: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  value: '',
  placeholder: '',
  className: '',
  onChange: () => {},
  displayAsterisk: false,
  fileInfo: '',
};

export default Input;
