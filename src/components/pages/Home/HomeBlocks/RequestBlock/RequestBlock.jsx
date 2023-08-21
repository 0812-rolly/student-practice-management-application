import React from 'react';
import { useSelector } from 'react-redux';
import './RequestBlock.scss';
import RequestForm from 'components/units/RequestForm/RequestForm';

let text;

function RequestBlock() {
  text = useSelector((state) => state.user.siteText.requestBlock);

  return (
    <div className="request-block">
      <p className="request-block__title">{text.request_title}</p>
      <p id="request-call-id" className="request-block__call-to-action">{text.request_info}</p>
      <RequestForm />
    </div>
  );
}

export default RequestBlock;
