import Position from '../position/position.js';
import burgerConstructorStyles from './burger-constructor.module.css';
import { Typography, Box, Tab, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'



export default function BurgerConstructor (props) {
  return (
    <div className={burgerConstructorStyles.container}>
      <div className={`${burgerConstructorStyles.positions}  mt-15`}>
        <Position type={'top'} isLocked={true} text={props.data[0].name} price={props.data[0].price} thumbnail={props.data[0].image} />
        <Position type={'undefined'} isLocked={false} text={props.data[4].name} price={props.data[4].price} thumbnail={props.data[4].image} />
        <Position type={'undefined'} isLocked={false} text={props.data[6].name} price={props.data[6].price} thumbnail={props.data[6].image} />
        <Position type={'undefined'} isLocked={false} text={props.data[8].name} price={props.data[8].price} thumbnail={props.data[8].image} />
        <Position type={'bottom'} isLocked={true} text={props.data[0].name} price={props.data[0].price} thumbnail={props.data[0].image} />
      </div>
      <div className={`${burgerConstructorStyles.sum} mt-5`}>
        <p className={'text text_type_main-large mr-2'}>650</p>
        <CurrencyIcon type="primary" />
        <Button extraClass={'ml-10'} htmlType="button" type="primary" size="large">Оформить заказ</Button>
      </div>
    </div>
  )
}