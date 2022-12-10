import React from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay.js';
import modalStyles from './modal.module.css';
import { Typography, Box, CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.getElementById('modal-root');

export default function Modal(props) {

  const close = () => {
    props.closeModal();
  }

  return ReactDOM.createPortal(
    (
      <div className={modalStyles.container}>
        <ModalOverlay onClick={close} />
        <div className={`${modalStyles.form} pt-10 pr-10 pb-15 pl-10`}>
          <div className={modalStyles.header}>
            <p className={'text text_type_main-large'}>Детали ингредиента</p>
            <button className={modalStyles.closeButton} onClick={close}><CloseIcon type="primary" /></button>
          </div>
        </div>
      </div>
    ),
    modalRoot
  );
}
