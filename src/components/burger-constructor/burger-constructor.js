import Position from '../position/position.js';
import burgerConstructorStyles from './burger-constructor.module.css';
import { Typography, Box, Tab, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'



export default function BurgerConstructor (props) {
  return (
    <div className={burgerConstructorStyles.container}>
      <div className={burgerConstructorStyles.positions}>
        <Position />
        <Position />
        <Position />
      </div>
      <div className={`${burgerConstructorStyles.sum} mt-5`}>
        <p className={'text text_type_main-large mr-2'}>650</p>
        <CurrencyIcon type="primary"/>
        <Button extraClass={'ml-5'} htmlType="button" type="primary" size="large">Оформить заказ</Button>
      </div>
    </div>
  )
}