import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SvgIcon from 'components/pages/Home/HomeBlocks/PracticeAreas/AreasItems/SvgIcon/SvgIcon';
import { PlusInCircle } from 'components/units/Icons/Icons';
import ModalWindow from 'components/units/ModalWindow/ModalWindow';
import PracticeForm from 'components/units/PracticeForm/PracticeForm';
import './AddPractice.scss';

function AddPractice({ onChange }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    onChange();
  };
  const modalTitle = 'Add practice';

  const modalBody = (<PracticeForm />);

  return (
    <>
      <SvgIcon
        className="add-practice__icon add-practice__icon_plus"
        width={36}
        height={36}
        iconOptions={PlusInCircle.lines}
        onClick={openModal}
        viewBox={PlusInCircle.viewBox}
      />

      <ModalWindow
        isOpen={modalIsOpen}
        modalTitle={modalTitle}
        modalBody={modalBody}
        onCancel={closeModal}
      />
    </>
  );
}

AddPractice.propTypes = {
  onChange: PropTypes.func,
};

AddPractice.defaultProps = {
  onChange: () => { },
};
export default AddPractice;
