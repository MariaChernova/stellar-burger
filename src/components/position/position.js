import positionStyles from './position.module.css';
import { Typography, Box, Tab, DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';


export default function Position(props) {
  return (
    <div className={positionStyles.item}>
      <DragIcon type="primary" />
      <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        // thumbnail={img}
      />
    </div>
  )
}