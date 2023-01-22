import React from 'react';
import PropTypes from 'prop-types';
import Position from '../position/position.jsx';
import burgerConstructorStyles from './burger-constructor.module.css';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { API_DOMEN } from '../app/app'
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import { OPEN_ORDER_MODAL, MAKE_ORDER_REQUEST, MAKE_ORDER_SUCCESS, MAKE_ORDER_FAIL, ADD_INGREDIENT, SET_BUN } from '../../services/reducers/reducers';

export default function BurgerConstructor () {
  const dispatch = useDispatch();
  const { ingredients, bun, positions }  = useSelector(store => ({
    ingredients: store.ingredients.items,
    bun: store.burgerConstructor.bun,
    positions: store.burgerConstructor.positions
  }));

  const [{ isHover } , drop] = useDrop({
    accept: "ingredient",
    drop(item) {
      dispatch({
        type: item.type === 'bun' ? SET_BUN : ADD_INGREDIENT,
        id: item.id
      });
    },
});

  const makeOrder = async () => {
    try {
      dispatch({type: MAKE_ORDER_REQUEST});
      const res = await fetch(`https://${API_DOMEN}/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ingredients: [bun, ...positions, bun]
        })
      });
      if (!res.ok) {
        throw res.statusText;
      }
      const data = await res.json();

      dispatch({type: MAKE_ORDER_SUCCESS, orderId: data.order.number});

      dispatch({
        type: OPEN_ORDER_MODAL,
        id: data.order.number
      });

    } catch (error) {
      dispatch({type: MAKE_ORDER_FAIL});
      console.log(`Error while trying data from server: ${error}`);
    }
  };

  const totalPrice = ingredients
    ? positions.reduce((accumulator, item) => accumulator + ingredients.find(element => element._id === item).price, 0)
    : 0;

  return (
    <div className={burgerConstructorStyles.container}>
      {ingredients !== null &&
        <div className={burgerConstructorStyles.positions} ref={drop}>
          <Position key={0} type={'top'} isLocked={true} data={ingredients.find(element => element._id === bun)} />
          <div className={burgerConstructorStyles.scrollPositions}>
            {positions.map((id, index) => 
              <Position key={index + 2} type={'undefined'} isLocked={false} data={ingredients.find(element => element._id === id)} />
            )}
          </div>
          <Position key={1} type={'bottom'} isLocked={true} data={ingredients.find(element => element._id === bun)} />
        </div>
      }
      <div className={`${burgerConstructorStyles.sum} mt-5 mr-4`}>  
        <p className={'text text_type_main-large mr-2'}>{totalPrice}</p>
        <CurrencyIcon type="primary" />
        <Button extraClass={'ml-10'} htmlType="button" type="primary" size="large" onClick={makeOrder}>Оформить заказ</Button>
      </div>
    </div>
  )
}

BurgerConstructor.propTypes = {
}
