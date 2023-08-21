import React from 'react';
import PropTypes from 'prop-types';
import Asterisk from 'components/units/Asterisk/Asterisk';
import './Textarea.scss';

const Textarea = ({
  label, className, name, placeholder, value, onChange, displayAsterisk, title,
}) => (
  <div className="input-wrapper">
    <label className="label" htmlFor={name}>
      {label}
      {displayAsterisk && <Asterisk />}
    </label>
    <textarea
      className={`textarea ${className}`}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      title={title}
    />
  </div>
);

Textarea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
  displayAsterisk: PropTypes.bool,
  title: PropTypes.string,
};

Textarea.defaultProps = {
  label: '',
  className: '',
  placeholder: '',
  onChange: () => {},
  displayAsterisk: false,
  title: '',
};

export default Textarea;
