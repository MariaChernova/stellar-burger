import React from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay from '../modal-overlay/modal-overlay.jsx';
import modalStyles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';


const modalRoot = document.getElementById('modal-root');

export default function Modal(props) {
  const { children, header, onClose } = props;

  const close = () => {
    onClose();
  }

  const escFunction = React.useCallback((event) => {
    if (event.key === "Escape") {
      close();
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return ReactDOM.createPortal(
    (
      <div className={modalStyles.container}>
        <ModalOverlay onClick={close} />
        <div className={`${modalStyles.form} pt-10 pr-10 pb-15 pl-10`}>
          <div className={modalStyles.header}>
            <p className={'text text_type_main-large'}>{header}</p>
            <button className={modalStyles.closeButton} onClick={close}><CloseIcon type="primary" /></button>
          </div>
          {children}
        </div>
      </div>
    ),
    modalRoot
  );
}

Modal.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    count: PropTypes.number,
  }),
}
