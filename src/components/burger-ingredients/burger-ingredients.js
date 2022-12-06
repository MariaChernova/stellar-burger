import React from 'react';
import ReactDOM from 'react-dom/client';
import burgerIngredientsStyles from './burger-ingredients.module.css';
import { Typography, Box, Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Item from '../item/item.js'


export default function BurgerIngredients(props) {
  // const {counter, setCount} = React.useState;

  // React.useEffect(() => {
  //   setCount = !counter;
  // }, []);

  // // const 
  const [current, setCurrent] = React.useState('one');

  return (
    <div className={`${burgerIngredientsStyles.container} mr-5`}>
      <h1 className={'text text_type_main-large mt-5 mb-5'}>Соберите бургер</h1>
      <div className={`${burgerIngredientsStyles.tabs} mb-5`}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          One
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Two
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Three
        </Tab>
      </div>
      <div className={`pt-5`}>
        <h2 className={'text text_type_main-medium mb-5'}>Булки</h2>
        <div className={`${burgerIngredientsStyles.block} mt-1 ml-4 mr-4 mb-5`}>
          {props.data.filter(obj => obj.type === 'bun').map((obj) => (
            <Item key={obj.id} imageSrc={obj.image} price={obj.price} name={obj.name} />
          ))}
        </div>
      </div>
      <div className={burgerIngredientsStyles.items}>
        <h2 className={'text text_type_main-medium mt-5 mb-5'}>Соусы</h2>
        <div className={burgerIngredientsStyles.block}>
          {props.data.filter(obj => obj.type === 'sauce').map((obj) => (
            <Item key={obj.id} imageSrc={obj.image} price={obj.price} name={obj.name} />
          ))}
        </div>
      </div>
      <div className={burgerIngredientsStyles.items}>
        <h2 className={'text text_type_main-medium mt-5 mb-5'}>Начинки</h2>
        <div className={burgerIngredientsStyles.block}>
          {props.data.filter(obj => obj.type === 'main').map((obj) => (
            <Item key={obj.id} imageSrc={obj.image} price={obj.price} name={obj.name} />
          ))}
        </div>
      </div>
    </div>
  )
}