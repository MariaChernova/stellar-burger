import React from 'react';
import ReactDOM from 'react-dom/client';
import ModalOverlay from './components/modal-overlay/modal-overlay.js';
import modalStyles from './components/modal/modal.module.css';
import { Typography, Box, CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';


export default function Modal(props) {
  const modalRoot = ReactDOM.createRoot(
    document.getElementById('modal-root') as HTMLElement
  )

  return ReactDOM.createPortal(
    <div className={modalStyles.container}>
      <div className={modalStyles.bg}>
        <div className={modalStyles.header}>
          <p className={modalStyles.title}>{props.title}</p>
          <CloseIcon type="primary" />
        </div>
      </div>
      <ModalOverlay />
    </div>
    , modalRoot
  )
}