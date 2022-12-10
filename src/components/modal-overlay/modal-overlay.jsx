import modalOverlayStyles from './modal-overlay.module.css';
import PropTypes from 'prop-types';


export default function ModalOverlay(props) {
  return (
    <div className={modalOverlayStyles.overlay} onClick={props.onClick}></div>
  )
}

ModalOverlay.propTypes = {
  onClick: PropTypes.func
}
