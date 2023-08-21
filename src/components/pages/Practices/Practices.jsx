import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchPractices from 'store/practices/utils';
import { stringify } from 'query-string';
import Filter from 'components/units/Filter/Filter';
import Pagination from 'components/units/Pagination/Pagination';
import PracticesList from './PracticesList';
import AddPractice from './AddPractice';
import './Practices.scss';

function Practices() {
  const dispatch = useDispatch();

  const { practices } = useSelector((state) => state.practices);

  /* eslint-disable no-multi-spaces */
  const [currentPage, setCurrentNumber]   = useState(1);
  const [perPage]                         = useState(5);
  const [startDate, setStartDate]         = useState([]);
  const [endDate, setEndDate]             = useState([]);
  const [dateSort, setDateSort]           = useState({ startDate: null, endDate: null, order: [] });
  const [status, setStatus]               = useState([]);
  /* eslint-enable no-multi-spaces */

  const lastPracticesIndex = currentPage * perPage;
  const firstPracticesIndex = lastPracticesIndex - perPage;
  const currentPractices = (practices.length > 0)
    ? (practices.slice(firstPracticesIndex, lastPracticesIndex))
    : (practices);

  const onSelectChange = (statusOptions) => setStatus(statusOptions);
  const onChangeDateSort = (dateType) => {
    const value = dateSort[dateType];
    let newValue;
    if (value === 'asc') {
      newValue = 'desc';
    } else if (value === 'desc') {
      newValue = 'asc';
    } else {
      newValue = 'asc';
    }
    setDateSort((prevState) => ({
      ...prevState,
      [dateType]: newValue,
      order: [dateType, ...dateSort.order.filter((el) => el !== dateType)],
    }));
  };
  const paginate = (pageNumber) => setCurrentNumber(pageNumber);

  const onUpdate = () => {
    const statusArr = status.map((item) => item.value);

    const statusObj = {
      statuses: statusArr,
      from: (startDate.length === 0) ? ('') : (startDate.target.value),
      to: (endDate.length === 0) ? ('') : (endDate.target.value),
      sort: dateSort.order && dateSort.order.map((el) => `${el},${dateSort[el]}`),
    };
    dispatch(fetchPractices(`?${stringify(statusObj, { skipNull: true }).replace(/%2C/g, ',')}`));
  };

  useEffect(() => {
    dispatch(fetchPractices());
  }, []);

  useEffect(() => {
    onUpdate();
  }, [dateSort]);

  return (
    <>
      <div>
        <Filter
          onChangeStartDate={setStartDate}
          onChangeEndDate={setEndDate}
          status={status}
          onSelectChange={onSelectChange}
          onUpdate={onUpdate}
        />
        <PracticesList
          startDateSort={dateSort.startDate}
          onChangeStartDateSort={() => onChangeDateSort('startDate')}
          endDateSort={dateSort.endDate}
          onChangeEndDateSort={() => onChangeDateSort('endDate')}
          currentPractices={currentPractices}
        />
        <Pagination perPage={perPage} total={(practices.length)} paginate={paginate} />
        <AddPractice onChange={onUpdate} />
      </div>
    </>
  );
}

export default Practices;
