import { useRef } from 'react';
import positionStyles from './position.module.css';
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import {ingredientType} from '../../utils/types.js';
import { useDispatch } from 'react-redux';
import { DELETE_ITEM, MOVE_INGREDIENT, SET_BUN, ADD_INGREDIENT } from '../../services/actions/actions';
import { useDrag, useDrop } from 'react-dnd';


export default function Position({uuid, data, type, index, isLocked}) {
  const ref = useRef(null);

  let text = data.name;
  if (type == 'top') {
    text += ' (верх)'
  } else if (type == 'bottom') {
    text += ' (низ)'
  }

  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch({type: DELETE_ITEM, index: index})
  }

  const [,drop] = useDrop({
    accept: "ingredient",
    drop(item) {
      if (typeof item.from !== 'undefined') {
        dispatch({
          type: MOVE_INGREDIENT,
          id: item.id,
          from: item.from,
          to: index
        });
      } else {
        dispatch({
          type: item.type === 'bun' ? SET_BUN : ADD_INGREDIENT,
          id: item.id,
        });
      }
    }
  });

  let [{ isDrag }, drag] = useDrag({
    type: 'ingredient',
    item: { 
      id: data._id,
      uuid: uuid,
      type: data.type,
      from: index
    },
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });

  if (data.type === 'bun') {
    isDrag = false;
  } else {
    drag(drop(ref))
  }

  return (
    !isDrag && 
      <div className={`${positionStyles.item} ml-4 mb-4`} ref={ref}>
        <div className={`${positionStyles.drag} mr-2` }>
          {!isLocked && <DragIcon type="primary" />}
        </div>
        <ConstructorElement
          type={type}
          isLocked={isLocked}
          text={text}
          price={data.price}
          thumbnail={data.image}
          handleClose={onDelete}
        />
      </div>
  )
}

Position.propTypes = {
  type: PropTypes.oneOf(['top', 'bottom', 'undefined']).isRequired,
  index: PropTypes.number,
  isLocked: PropTypes.bool.isRequired,
  data: ingredientType.isRequired,
}
