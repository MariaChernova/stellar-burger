import React from 'react';
import ReactDOM from 'react-dom/client';
import burgerIngredientsStyles from './burger-ingredients.module.css';
import { Typography, Box, Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Item from '../item/item.js'


export default function BurgerIngredients(props) {
  return (
    <div className={burgerIngredientsStyles.container}>
      <h1 className={'text text_type_main-large'}>Соберите бургер</h1>
      <div className={burgerIngredientsStyles.tabs}>
        <tab>Булки</tab>
        <tab>Соусы</tab>
        <tab>Начинки</tab>
      </div>
      <div className={burgerIngredientsStyles.items}>
        <h2 className={'text text_type_main-medium'}>Булки</h2>
        <div className={burgerIngredientsStyles.block}>
          {props.data.filter(obj => obj.type === 'bun').map((obj) => (
            <Item key={obj.id} imageSrc={obj.image} price={obj.price} name={obj.name} />
          ))}
        </div>
      </div>
      <div className={burgerIngredientsStyles.items}>
        <h2 className={'text text_type_main-medium'}>Соусы</h2>
        <div className={burgerIngredientsStyles.block}>
          {props.data.filter(obj => obj.type === 'sauce').map((obj) => (
            <Item key={obj.id} imageSrc={obj.image} price={obj.price} name={obj.name} />
          ))}
        </div>
      </div>
      <div className={burgerIngredientsStyles.items}>
        <h2 className={'text text_type_main-medium'}>Начинки</h2>
        <div className={burgerIngredientsStyles.block}>
          {props.data.filter(obj => obj.type === 'main').map((obj) => (
            <Item key={obj.id} imageSrc={obj.image} price={obj.price} name={obj.name} />
          ))}
        </div>
      </div>
    </div>
  )
}