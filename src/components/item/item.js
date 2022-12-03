import itemStyles from './item-module.css';
import { Typography, Box, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

export default function Item(props) {
  return(
    <div className={itemStyles.block}>
      <img src={props.imageSrc} alt='Image' className={itemStyles.image} />
      <div className={itemStyles.items}>
        <p>{props.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p>{props.name}</p>
    </div>
  )
}