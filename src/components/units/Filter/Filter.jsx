import React from 'react';
import PropTypes from 'prop-types';
import MultiSelectStatus from '../../pages/Practices/StatusSelect';
import './Filter.scss';

const Filter = ({
  onChangeStartDate, onChangeEndDate, status, onSelectChange, onUpdate,
}) => (
  <div className="filter">
    <span className="filter__date">Date:</span>
    <input
      className="filter__start-date"
      type="date"
      id="startDate"
      name="practice-start"
      min="2020-01-01"
      onChange={onChangeStartDate}
    />
    -
    <input
      className="filter__end-date"
      type="date"
      id="endDate"
      name="practice-end"
      min="2020-01-01"
      onChange={onChangeEndDate}
    />
    <MultiSelectStatus
      className="filter__status"
      classNamePrefix="status-select"
      value={status}
      onSelectChange={onSelectChange}
    />
    <button className="filter__button button" type="button" onClick={onUpdate}>Update</button>
  </div>
);

Filter.propTypes = {
  onChangeStartDate: PropTypes.func,
  onChangeEndDate: PropTypes.func,
  status: PropTypes.arrayOf(PropTypes.array),
  onSelectChange: PropTypes.func,
  onUpdate: PropTypes.func,
};

Filter.defaultProps = {
  onChangeStartDate: () => { },
  onChangeEndDate: () => { },
  status: [],
  onSelectChange: () => { },
  onUpdate: () => { },
};
export default Filter;
