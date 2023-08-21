import React from 'react';
import { useSelector } from 'react-redux';
import AreasItems from './AreasItems/AreasItems';
import './PracticeAreas.scss';

let text;

function PracticeAreas() {
  text = useSelector((state) => state.user.siteText.practiceAreasBlock);

  return (
    <div className="areas-block">
      <p className="areas-block__title">{text.practiceAreas_title}</p>
      <div className="areas-block__items-container">
        <AreasItems />
      </div>
    </div>
  );
}

export default PracticeAreas;
