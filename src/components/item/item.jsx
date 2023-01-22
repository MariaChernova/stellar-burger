import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import itemStyles from './item.module.css';
import {ingredientType} from '../../utils/types.js'
import { useDispatch } from 'react-redux';
import { OPEN_INGREDIENT_MODAL } from '../../services/reducers/reducers';
import { useDrag } from 'react-dnd';

export default function Item({data}) {
  const dispatch = useDispatch();

  const [{ isDrag }, drag] = useDrag({
    type: 'ingredient',
    item: { 
      id: data._id,
      type: data.type
     }
  });

  const handleComponentClick = () => {
    dispatch({
      type: OPEN_INGREDIENT_MODAL,
      data: data
    })
  }

  return(
    <div className={`${itemStyles.block} mb-8`} onClick={handleComponentClick} ref={drag} >
      <Counter count={data.count} size="default" extraClass="m-1" />
      <img src={data.image} alt='Внешний вид ингредиента' className={itemStyles.image} />
      <div className={`${itemStyles.priceBlock} mt-1 mb-1`}>
        <p className={'text text_type_digits-default mr-2'}>{data.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`text text_type_main-default" ${itemStyles.p}`}>{data.name}</p>
    </div>
  )
}

Item.propTypes = {
  data: ingredientType.isRequired,
}
