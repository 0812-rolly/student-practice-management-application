import React from 'react';
import { useSelector } from 'react-redux';
import './InfoBlock.scss';

let text;

function InfoBlock() {
  text = useSelector((state) => state.user.siteText.infoBlock);

  return (
    <div className="info-block">
      <img
        className="info-block__image"
        src="/images/infoblock_photo.png"
        width="350"
        height="300"
        alt="Practice"
      />
      <div className="info-block__info">
        <p className="info-block__info__title">{text.info_title}</p>
        <img
          className="info-block__info__line"
          src="/images/line.png"
          alt="Line"
          width="170"
          height="2"
        />
        <p className="info-block__info__text">{text.first_par}</p>
        <p className="info-block__info__text">{text.second_par}</p>
      </div>
    </div>
  );
}

export default InfoBlock;
