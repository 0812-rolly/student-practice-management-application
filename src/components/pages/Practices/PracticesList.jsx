import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './PracticesList.scss';

const PracticesList = ({
  startDateSort, onChangeStartDateSort, endDateSort, onChangeEndDateSort, currentPractices,
}) => (
  <div className="container">
    <div className="practices-container">
      <div className="practices-header">
        <span className="practices-header__title">Title</span>
        {(startDateSort)
          ? (
            <i
              className={`${startDateSort}-arrow`}
              aria-label="Sort start date"
              role="button"
              tabIndex="0"
              onKeyPress={onChangeStartDateSort}
              onClick={onChangeStartDateSort}
            />
          )
          : (
            null
          )}
        <span
          className="practices-header__startDate"
          role="button"
          tabIndex="0"
          onKeyPress={onChangeStartDateSort}
          onClick={onChangeStartDateSort}
        >
          Start date
        </span>
        {(endDateSort)
          ? (
            <i
              className={`${endDateSort}-arrow`}
              aria-label="Sort end date"
              role="button"
              tabIndex="0"
              onKeyPress={onChangeEndDateSort}
              onClick={onChangeEndDateSort}
            />
          )
          : (
            null
          )}
        <span
          className="practices-header__endDate"
          role="button"
          tabIndex="0"
          onKeyPress={onChangeEndDateSort}
          onClick={onChangeEndDateSort}
        >
          End date
        </span>
        <span className="practices-header__status">Status</span>
        <span className="practices-header__location">Location</span>
      </div>
      {currentPractices.length && currentPractices.map((practice) => (
        <div className="practices" key={practice.id}>
          <span className="practices__title">
            <Link
              className="practices__link"
              key={practice.id}
              to={`practices/${practice.id}`}
            >
              {`${practice.title}`}
            </Link>
          </span>
          <span className="practices__startDate">{practice.startDate}</span>
          <span className="practices__endDate">{practice.endDate}</span>
          <span className="practices__status">{practice.status}</span>
          <span className="practices__location">{practice.location.name}</span>
        </div>
      ))}
    </div>
  </div>
);

PracticesList.propTypes = {
  startDateSort: PropTypes.string,
  onChangeStartDateSort: PropTypes.func,
  endDateSort: PropTypes.string,
  onChangeEndDateSort: PropTypes.func,
  currentPractices: PropTypes.arrayOf(PropTypes.object),
};

PracticesList.defaultProps = {
  startDateSort: '',
  onChangeStartDateSort: () => { },
  endDateSort: '',
  onChangeEndDateSort: () => { },
  currentPractices: [],
};
export default PracticesList;
