import positionStyles from './position.module.css';
import { Typography, Box, Tab, DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';


export default function Position(props) {
  return (
    <div className={`${positionStyles.item} ml-4 mb-4`}>
      <div className={'mr-2'}><DragIcon type="primary" /></div>
      <ConstructorElement
        type={props.type}
        isLocked={props.isLocked}
        text={props.text}
        price={props.price}
        thumbnail={props.thumbnail}
      />
    </div>
  )
}