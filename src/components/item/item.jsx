import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import itemStyles from './item.module.css';
import PropTypes from 'prop-types';


export default function Item(props) {

  const handleComponentClick = () => {
    props.openIngredientModal(props.data);
  }

  return(
    <div className={`${itemStyles.block} mb-8`} onClick={handleComponentClick}>
      <Counter count={props.data.count} size="default" extraClass="m-1" />
      <img src={props.data.image} alt='Image' className={itemStyles.image} />
      <div className={`${itemStyles.priceBlock} mt-1 mb-1`}>
        <p className={'text text_type_digits-default mr-2'}>{props.data.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`text text_type_main-default" ${itemStyles.p}`}>{props.data.name}</p>
    </div>
  )
}

Item.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    count: PropTypes.number,
  }),
}
