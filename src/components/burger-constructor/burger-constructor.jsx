import PropTypes from 'prop-types';
import Position from '../position/position.jsx';
import burgerConstructorStyles from './burger-constructor.module.css';
import { Typography, Box, Tab, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'



export default function BurgerConstructor (props) {
  const bun = 0;
  const positions = [4, 6, 8, 4, 6, 8, 5];

  return (
    <div className={burgerConstructorStyles.container}>
      {props.data !== null &&
        <div className={burgerConstructorStyles.positions}>
          <Position key={0} type={'top'} isLocked={true} data={props.data[bun]} />
          <div className={burgerConstructorStyles.scrollPositions}>
            {positions.map((position, index) => 
              <Position key={index + 2} type={'undefined'} isLocked={false} data={props.data[position]} />
            )}
          </div>
          <Position key={1} type={'bottom'} isLocked={true} data={props.data[bun]} />
        </div>
      }
      <div className={`${burgerConstructorStyles.sum} mt-5 mr-4`}>  
        <p className={'text text_type_main-large mr-2'}>650</p>
        <CurrencyIcon type="primary" />
        <Button extraClass={'ml-10'} htmlType="button" type="primary" size="large" onClick={props.openOrderModal}>Оформить заказ</Button>
      </div>
    </div>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  openOrderModal: PropTypes.func
}