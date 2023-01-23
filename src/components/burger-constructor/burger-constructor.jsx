import Position from '../position/position.jsx';
import burgerConstructorStyles from './burger-constructor.module.css';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { API_DOMEN } from '../app/app'
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import { checkResponse } from '../../utils/checkResponse';
import {
  OPEN_ORDER_MODAL,
  MAKE_ORDER_REQUEST,
  MAKE_ORDER_SUCCESS,
  MAKE_ORDER_FAIL,
  ADD_INGREDIENT,
  SET_BUN,
  MOVE_INGREDIENT
} from '../../services/actions/actions';
import { v4 as uuidv4 } from 'uuid';

export default function BurgerConstructor () {
  const dispatch = useDispatch();
  const { ingredients, bun, positions }  = useSelector(store => ({
    ingredients: store.ingredients.items,
    bun: store.burgerConstructor.bun,
    positions: store.burgerConstructor.positions
  }));

  const [{ isHover } , drop] = useDrop({
    accept: "ingredient",
    drop(item, monitor) {
      if (monitor.didDrop())
        return;
      if (typeof item.from !== 'undefined') {
        dispatch({
          type: MOVE_INGREDIENT,
          id: item.id,
          from: item.from,
          uuid: item.uuid
        });
      } else {
        dispatch({
          type: item.type === 'bun' ? SET_BUN : ADD_INGREDIENT,
          id: item.id,
          uuid: uuidv4()
        });
      }
    },
    collect: monitor => ({
      isHover: monitor.isOver(),
    })
  });

  const makeOrder = () => {
    return async (dispatch0) => {
      try {
        dispatch0({type: MAKE_ORDER_REQUEST});
        const res = await fetch(`https://${API_DOMEN}/api/orders`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ingredients: [bun, ...positions.map((element) => element.id), bun]
          })
        });
        checkResponse(res);
        const data = await res.json();

        dispatch0({type: MAKE_ORDER_SUCCESS, orderId: data.order.number});

        dispatch0({
          type: OPEN_ORDER_MODAL,
          id: data.order.number
        });

      } catch (error) {
        dispatch0({type: MAKE_ORDER_FAIL});
        console.log(`Error while trying data from server: ${error}`);
      }
    }
  };

  const handleClick = () => {
    dispatch(makeOrder())
  }

  const totalPrice = ingredients
    ? positions.reduce((accumulator, item) => accumulator + ingredients.find(element => element._id === item.id).price, 0)
      + (bun ? ingredients.find(element => element._id === bun).price * 2 : 0)
    : 0;

  const backgroundColor = isHover ? '#1F1F23' : 'transparent';

  return (
    <div className={burgerConstructorStyles.container}>
      {ingredients !== null &&
        <div className={burgerConstructorStyles.positions} ref={drop} style={{backgroundColor}}>
          {bun && <Position key={0} type={'top'} isLocked={true} data={ingredients.find(element => element._id === bun)} />}
          <div className={burgerConstructorStyles.scrollPositions}>
            {positions.map(({id, uuid}, index) => 
              <Position key={ uuid } uuid={uuid} id={id} index={index} type={'undefined'} isLocked={false} data={ingredients.find(element => element._id === id)} />
            )}
          </div>
          {bun && <Position key={1} type={'bottom'} isLocked={true} data={ingredients.find(element => element._id === bun)} />}
        </div>
      }
      <div className={`${burgerConstructorStyles.sum} mt-5 mr-4`}>  
        <p className={'text text_type_main-large mr-2'}>{totalPrice}</p>
        <CurrencyIcon type="primary" />
        <Button extraClass={'ml-10'} htmlType="button" type="primary" size="large" onClick={handleClick}>Оформить заказ</Button>
      </div>
    </div>
  )
}
