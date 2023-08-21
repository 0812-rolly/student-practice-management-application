import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import './ModalWindow.scss';

Modal.setAppElement('#root');

const ModalWindow = ({
  isOpen, onCancel, modalTitle, modalBody,
}) => (
  <Modal
    className="modal"
    isOpen={isOpen}
    onRequestClose={onCancel}
    shouldCloseOnOverlayClick
    closeTimeoutMS={500}
  >
    <h3 className="modal__title">
      {modalTitle}
    </h3>
    <div className="modal__body">
      {modalBody}
    </div>
  </Modal>
);

ModalWindow.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  modalTitle: PropTypes.string,
  modalBody: PropTypes.element,
};

ModalWindow.defaultProps = {
  modalTitle: '',
  modalBody: '',
};

export default ModalWindow;
