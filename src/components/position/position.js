import positionStyles from './position.module.css';
import { Typography, Box, Tab, DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';


export default function Position(props) {
  return (
    <div className={`${positionStyles.item} mb-4`}>
      <DragIcon type="primary" />
      <ConstructorElement
        type={props.type}
        isLocked={props.isLocked}
        text={props.text}
        price={props.price}
        // thumbnail={img}

      />
    </div>
  )
}