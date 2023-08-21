import React from 'react';
import PropTypes from 'prop-types';

const PracticeInfo = ({
  title, location, startDate, endDate, status,
}) => (
  <div className="general-info__content-container">
    <div className="general-info__content generalinfo__content__name">
      <img
        className="general-info__image"
        src="/images/title.png"
        width="60"
        height="60"
        alt="title"
      />
      <span className="general-info__body">{title}</span>
    </div>
    <div className="general-info__content general-info__content__location">
      <img
        className="general-info__image"
        src="/images/location.png"
        width="60"
        height="60"
        alt="location"
      />
      <span className="general-info__body">{location}</span>
    </div>
    <div className="general-info__content general-info__content__duration">
      <img
        className="general-info__image"
        src="/images/duration.png"
        width="60"
        height="60"
        alt="duration"
      />
      <span className="general-info__body">{`${startDate} - ${endDate}`}</span>
    </div>
    <div className="general-info__content general-info__content__status">
      <img
        className="general-info__image"
        src="/images/status.png"
        width="60"
        height="60"
        alt="status"
      />
      <span className="general-info__body">{status}</span>
    </div>
  </div>
);

PracticeInfo.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  status: PropTypes.string,
};

PracticeInfo.defaultProps = {
  title: '',
  location: '',
  startDate: '',
  endDate: '',
  status: '',
};

export default PracticeInfo;
