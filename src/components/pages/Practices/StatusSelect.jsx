import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import './Practices.scss';

const options = [
  { value: 'DRAFT', label: 'Draft' },
  { value: 'ACTIVE', label: 'Active' },
  { value: 'FINISHED', label: 'Finished' },
  { value: 'ARCHIVED', label: 'Archived' },
];
const MultiSelectStatus = ({
  className, classNamePrefix, value, onSelectChange,
}) => (
  <Select
    id="status"
    name="multipleSelect"
    className={className}
    classNamePrefix={classNamePrefix}
    value={value}
    closeMenuOnSelect={false}
    isMulti
    options={options}
    onChange={onSelectChange}
  />
);

MultiSelectStatus.propTypes = {
  className: PropTypes.string,
  classNamePrefix: PropTypes.string,
  value: PropTypes.arrayOf(PropTypes.array),
  onSelectChange: PropTypes.func,
};

MultiSelectStatus.defaultProps = {
  className: '',
  classNamePrefix: '',
  value: [],
  onSelectChange: () => { },
};
export default MultiSelectStatus;
