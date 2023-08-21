import React from 'react';
import PropTypes from 'prop-types';

const SvgIcon = ({
  className, width, height, iconOptions, onClick, viewBox,
}) => (
  <svg
    viewBox={viewBox || `0 0 ${width} ${height}`}
    onClick={onClick}
    className={className}
    width={width}
    height={height}
  >
    {iconOptions.map((option) => (
      <path key={option.line} d={option.line} />
    ))}
  </svg>
);

SvgIcon.propTypes = {
  className: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  iconOptions: PropTypes.arrayOf(PropTypes.shape({
    line: PropTypes.string.isRequired,
  })),
  onClick: PropTypes.func,
  viewBox: PropTypes.string,
};

SvgIcon.defaultProps = {
  iconOptions: [],
  onClick: () => {},
  viewBox: '',
};

export default SvgIcon;
