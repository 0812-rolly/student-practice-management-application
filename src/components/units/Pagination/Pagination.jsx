import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.scss';

const Pagination = ({ perPage, total, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / perPage); i += 1) {
    pageNumbers.push(i);
  }
  return (
    <div className="pagination">
      {
        pageNumbers.map((number) => (
          <button key={number} type="button" className="page-link" onClick={() => paginate(number)}>
            {number}
          </button>
        ))
      }
    </div>
  );
};

Pagination.propTypes = {
  perPage: PropTypes.number,
  total: PropTypes.number,
  paginate: PropTypes.func,
};

Pagination.defaultProps = {
  perPage: 1,
  total: 1,
  paginate: () => { },
};
export default Pagination;
