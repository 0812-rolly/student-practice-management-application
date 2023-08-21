import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './MainBlock.scss';

let text;

function MainBlock() {
  const [requestForm, setRequestForm] = useState();

  function updateRequestFormRef() {
    setRequestForm(document.getElementById('request-call-id'));
  }

  text = useSelector((state) => state.user.siteText.mainBlock);

  useEffect(() => {
    if (requestForm) {
      requestForm.scrollIntoView({ block: 'center', behavior: 'smooth' });
      setRequestForm(null);
    }
  }, [requestForm]);

  return (
    <div className="main-block">
      <img
        className="main-block__image"
        src="/images/main_image.png"
        width="100%"
        height="70%"
        alt="Students meeting"
      />
      <div className="main-block-content">
        <p className="main-block-content__title">{text.main_title}</p>
        <button id="buttonScroll" type="button" className="main-block-content__button button" onClick={updateRequestFormRef}>{text.join_button}</button>
      </div>
    </div>
  );
}

export default MainBlock;
