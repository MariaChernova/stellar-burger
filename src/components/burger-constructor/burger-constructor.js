import Position from '../position/position.js';
import burgerConstructorStyles from './burger-constructor.module.css';
import { Typography, Box, Tab, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'



export default function BurgerConstructor (props) {
  const bun = 0;
  const positions = [4, 6, 8, 4, 6, 8, 5];

  return (
    <div className={burgerConstructorStyles.container}>
      {props.data !== null &&
        <div className={burgerConstructorStyles.positions}>
          <Position type={'top'} isLocked={true} data={props.data[bun]} />
          <div className={burgerConstructorStyles.scrollPositions}>
            {positions.map((position) => 
              <Position type={'undefined'} isLocked={false} data={props.data[position]} />
            )}
          </div>
          <Position type={'bottom'} isLocked={true} data={props.data[bun]} />
        </div>
      }
      <div className={`${burgerConstructorStyles.sum} mt-5 mr-4`}>  
        <p className={'text text_type_main-large mr-2'}>650</p>
        <CurrencyIcon type="primary" />
        <Button extraClass={'ml-10'} htmlType="button" type="primary" size="large">Оформить заказ</Button>
      </div>
    </div>
  )
}