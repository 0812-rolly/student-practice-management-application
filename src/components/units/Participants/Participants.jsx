import SvgIcon from 'components/pages/Home/HomeBlocks/PracticeAreas/AreasItems/SvgIcon/SvgIcon';
import React, { useState } from 'react';
import { PlusInCircle, MinusInCircle } from 'components/units/Icons/Icons';
import Button from 'components/controls/Button/Button';
import ModalWindow from '../ModalWindow/ModalWindow';

import './Participants.scss';
import FormAddingUserToPractice from '../FormAddingUserToPractice/FormAddingUserToPractice';

function Participants() {
  const [participants, setParticipants] = useState([
    {
      id: 1, name: 'Ivan Ivanov', email: 'ivan@gmail.com', specialization: 'UI engineer', role: 'STUDENT',
    },
    {
      id: 2, name: 'Qertyupasd-Fghjklvbnm Qwertyuiop', email: 'vasya-petrov@gmail.com', specialization: 'QA', role: 'LEAD',
    },
    {
      id: 3, name: 'Elena Kim', email: 'kim@gmail.com', specialization: 'QA', role: 'STUDENT',
    },
  ]);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentModalBody, setCurrentModalBody] = useState(null);
  const [currentModalTitle, setCurrentModalTitle] = useState(null);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmitForm = (participant) => {
    const {
      name, role, email, specialization,
    } = participant;

    const newParticipants = [
      {
        id: participants.length + 1,
        name,
        email,
        role: role.name,
        specialization: specialization.name,
      },
      ...participants,
    ];
    setParticipants(newParticipants);
    closeModal();
  };

  const openModal = (modalBody, modalTitle) => {
    setIsOpen(true);
    setCurrentModalBody(modalBody);
    setCurrentModalTitle(modalTitle);
  };

  const onSubmitRemove = (id) => {
    const newParticipants = participants.filter((participant) => participant.id !== +id);
    setParticipants(newParticipants);
    closeModal();
  };

  const modalTitleOfRemoving = 'Remove the participant';
  const modalTitleOfAdding = 'Add participant';

  const removeParticipantModalBody = (id) => (
    <>
      <div>Are you sure you want to remove this participant?</div>
      <Button title="Remove" onClick={() => onSubmitRemove(id)} type="submit" className="modal__button modal__button_ok" />
      <Button title="Cancel" onClick={closeModal} className="modal__button modal__button_cancel" />
    </>
  );

  const addParticipantModalBody = (
    <FormAddingUserToPractice
      closeModal={closeModal}
      handleSubmitForm={handleSubmitForm}
    />
  );

  const handleRemoveClick = (e) => {
    openModal(() => removeParticipantModalBody(e.target.parentElement.id), modalTitleOfRemoving);
  };

  const handleAddClick = () => {
    openModal(addParticipantModalBody, modalTitleOfAdding);
  };

  return (
    <div className="participant-container">
      {participants.length !== 0
        ? participants.map((participant) => (
          <div className="participant" id={participant.id} key={participant.id}>
            <span className="participant__name">{participant.name}</span>
            <span className="participant__email">{participant.email}</span>
            <span className="participant__specialization">{participant.specialization}</span>
            <span className="participant__role">{participant.role}</span>
            <SvgIcon
              className="participant__icon participant__icon_minus"
              width={36}
              height={36}
              iconOptions={MinusInCircle.lines}
              onClick={(e) => handleRemoveClick(e)}
              viewBox={MinusInCircle.viewBox}
              key={participant.id}
            />
          </div>
        )) : (
          <p>
            There are no participants yet
          </p>
        )}
      <SvgIcon
        className="participant__icon participant__icon_plus"
        width={36}
        height={36}
        iconOptions={PlusInCircle.lines}
        onClick={handleAddClick}
        viewBox={PlusInCircle.viewBox}
      />

      <ModalWindow
        isOpen={modalIsOpen}
        modalTitle={currentModalTitle}
        modalBody={currentModalBody}
        onCancel={closeModal}
      />
    </div>
  );
}

export default Participants;
