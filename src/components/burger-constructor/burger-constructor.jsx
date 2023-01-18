import React from 'react';
import PropTypes from 'prop-types';
import Position from '../position/position.jsx';
import burgerConstructorStyles from './burger-constructor.module.css';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import {AppContext} from '../../services/appContext';



export default function BurgerConstructor (props) {

  const {ingredients, constructor} = React.useContext(AppContext);
  const {bun, positions} = constructor;

  const {openOrderModal} = props;

  const totalPrice = ingredients
    ? positions.reduce((accumulator, item) => accumulator + ingredients[item].price, 0)
    : 0;

  return (
    <div className={burgerConstructorStyles.container}>
      {ingredients !== null &&
        <div className={burgerConstructorStyles.positions}>
          <Position key={0} type={'top'} isLocked={true} data={ingredients[bun]} />
          <div className={burgerConstructorStyles.scrollPositions}>
            {positions.map((position, index) => 
              <Position key={index + 2} type={'undefined'} isLocked={false} data={ingredients[position]} />
            )}
          </div>
          <Position key={1} type={'bottom'} isLocked={true} data={ingredients[bun]} />
        </div>
      }
      <div className={`${burgerConstructorStyles.sum} mt-5 mr-4`}>  
        <p className={'text text_type_main-large mr-2'}>{totalPrice}</p>
        <CurrencyIcon type="primary" />
        <Button extraClass={'ml-10'} htmlType="button" type="primary" size="large" onClick={openOrderModal}>Оформить заказ</Button>
      </div>
    </div>
  )
}

BurgerConstructor.propTypes = {
  openOrderModal: PropTypes.func.isRequired,
}
