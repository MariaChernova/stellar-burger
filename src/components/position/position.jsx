import positionStyles from './position.module.css';
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import {ingredientType} from '../../utils/types.js';
import { useDispatch } from 'react-redux';
import { DELETE_ITEM } from '../../services/reducers/reducers';



export default function Position(props) {
  let text = props.data.name;
  if (props.type == 'top') {
    text += ' (верх)'
  } else if (props.type == 'bottom') {
    text += ' (низ)'
  }

  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch({type: DELETE_ITEM, index: props.index})
  }

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
        handleClose={onDelete}
      />
    </div>
  )
}

Position.propTypes = {
  type: PropTypes.oneOf(['top', 'bottom', 'undefined']).isRequired,
  isLocked: PropTypes.bool.isRequired,
  data: ingredientType.isRequired,
}
