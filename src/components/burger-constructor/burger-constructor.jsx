import React from 'react';
import PropTypes from 'prop-types';
import Position from '../position/position.jsx';
import burgerConstructorStyles from './burger-constructor.module.css';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { AppContext } from '../../services/appContext';
import { API_DOMEN } from '../app/app'
import { useDispatch } from 'react-redux';
import { OPEN_ORDER_MODAL } from '../../services/reducers/reducers';



export default function BurgerConstructor () {
  const dispatch = useDispatch();
  const {ingredients, constructor} = React.useContext(AppContext);
  const {bun, positions} = constructor;

  const makeOrder = async () => {
    try {
      const url = `https://${API_DOMEN}/api/orders`;
      const res = await fetch(url, {
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

      dispatch({
        type: OPEN_ORDER_MODAL,
        id: data.order.number
      })

    } catch (error) {
      console.log(`Error while trying data from server: ${error}`);
    }
  };

  const totalPrice = ingredients
    ? positions.reduce((accumulator, item) => accumulator + ingredients.find(element => element._id === item).price, 0)
    : 0;

  return (
    <div className={burgerConstructorStyles.container}>
      {ingredients !== null &&
        <div className={burgerConstructorStyles.positions}>
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
