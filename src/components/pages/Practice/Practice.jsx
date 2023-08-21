import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Participants from 'components/units/Participants/Participants';
import Project from 'components/units/Project/Project';
import Tabs from 'components/units/Tabs/Tabs';
import PracticeInfo from 'components/units/PracticeInfo/PracticeInfo';
import getPracticeById from 'store/practice/utils';
import './Practice.scss';

function Practice() {
  const { practiceId } = useParams();
  const dispatch = useDispatch();
  const { practices } = useSelector((state) => state.practices);
  const { practice } = useSelector((state) => state.practice);

  useEffect(() => {
    dispatch(getPracticeById(practices, Number(practiceId)));
  }, [dispatch]);

  const tabItems = [
    { id: 1, title: 'Project', content: <Project /> },
    { id: 2, title: 'Participants', content: <Participants /> },
  ];

  return (
    practice ? (
      <div className="container">
        <PracticeInfo
          title={practice.title}
          location={practice.location.name}
          startDate={practice.startDate}
          endDate={practice.endDate}
          status={practice.status}
        />
        <Tabs tabItems={tabItems} />
      </div>
    ) : null
  );
}

export default Practice;
