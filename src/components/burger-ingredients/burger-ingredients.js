import React from 'react';
import ReactDOM from 'react-dom/client';
import burgerIngredientsStyles from './burger-ingredients.module.css';
import { Typography, Box, Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Item from '../item/item.js'


export default function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState('one');

  return (
    <div className={`${burgerIngredientsStyles.container} mr-5`}>
      <h1 className={'text text_type_main-large mb-5'}>Соберите бургер</h1>
      <div className={`${burgerIngredientsStyles.tabs} mb-8`}>
        <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div>
        <h2 className={'text text_type_main-medium mt-2 mb-6'}>Булки</h2>
        <div className={`${burgerIngredientsStyles.block} mt-1 ml-4 mr-4`}>
          {props.data.filter(obj => obj.type === 'bun').map((obj) => (
            <Item key={obj.id} imageSrc={obj.image} price={obj.price} name={obj.name} />
          ))}
        </div>
      </div>
      <div className={burgerIngredientsStyles.items}>
        <h2 className={'text text_type_main-medium mt-2 mb-6'}>Соусы</h2>
        <div className={burgerIngredientsStyles.block}>
          {props.data.filter(obj => obj.type === 'sauce').map((obj) => (
            <Item key={obj.id} imageSrc={obj.image} price={obj.price} name={obj.name} />
          ))}
        </div>
      </div>
      <div className={burgerIngredientsStyles.items}>
        <h2 className={'text text_type_main-medium mt-2 mb-6'}>Начинки</h2>
        <div className={burgerIngredientsStyles.block}>
          {props.data.filter(obj => obj.type === 'main').map((obj) => (
            <Item key={obj.id} imageSrc={obj.image} price={obj.price} name={obj.name} />
          ))}
        </div>
      </div>
    </div>
  )
}