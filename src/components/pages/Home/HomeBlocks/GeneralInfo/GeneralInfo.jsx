import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './GeneralInfo.scss';
import PracticeInfo from 'components/units/PracticeInfo/PracticeInfo';
import fetchPractices from 'store/comingPractices/utils';

let text;

function GeneralInfo() {
  text = useSelector((state) => state.user.siteText.generalInfoBlock);

  const dispatch = useDispatch();
  const { practices } = useSelector((state) => state.practices);
  useEffect(() => {
    dispatch(fetchPractices());
  }, []);

  return (
    <div className="general-info">
      <p className="general-info__title">{text.general_info_title}</p>
      {practices.length && practices.map((practice) => (
        <PracticeInfo
          key={practice.id}
          title={practice.title}
          location={practice.location.name}
          startDate={practice.startDate}
          endDate={practice.endDate}
          status={practice.status}
        />
      ))}
    </div>
  );
}

export default GeneralInfo;
