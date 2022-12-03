import { Typography, Box, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import itemStyles from './item.module.css';


export default function Item(props) {
  return(
    <div className={itemStyles.block}>
      <img src={props.imageSrc} alt='Image' className={itemStyles.image} />
      <div className={itemStyles.priceBlock}>
        <p className={'text text_type_digits-default mr-2'}>{props.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`text text_type_main-default" ${itemStyles.p}`}>{props.name}</p>
    </div>
  )
}