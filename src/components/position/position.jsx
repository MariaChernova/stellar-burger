import positionStyles from './position.module.css';
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';



export default function Position(props) {
  let text = props.data.name;
  if (props.type == 'top')
    text += ' (верх)'
  else if (props.type == 'bottom')
    text += ' (низ)'

  return (
    <div className={`${positionStyles.item} ml-4 mb-4`}>
      <div className={`${positionStyles.drag} mr-2`}>
        {!props.isLocked && <DragIcon type="primary" />}
      </div>
      <ConstructorElement
        type={props.type}
        isLocked={props.isLocked}
        text={text}
        price={props.data.price}
        thumbnail={props.data.image}
      />
    </div>
  )
}

Position.propTypes = {
  id: PropTypes.string
}
