import React from 'react';
import PropTypes from 'prop-types';
import Asterisk from 'components/units/Asterisk/Asterisk';
import './Select.scss';

const Select = ({
  value, label, className, name, onChange, displayAsterisk, options,
}) => (
  <div className="input-wrapper">
    <label className="label" htmlFor={name}>
      {label}
      {displayAsterisk && <Asterisk />}
    </label>
    <select
      className={`select ${className}`}
      id={name}
      name={name}
      value={value}
      options={options}
      onChange={onChange}
    >
      {options.map(
        (option) => (<option key={option.name} value={option.name}>{option.name}</option>),
      )}
    </select>
  </div>
);

const optionsPropType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
});

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  displayAsterisk: PropTypes.bool,
  options: PropTypes.arrayOf(optionsPropType).isRequired,
};

Select.defaultProps = {
  label: '',
  className: '',
  onChange: () => { },
  displayAsterisk: false,
  value: '',
};

export default Select;
