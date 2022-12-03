import React from 'react';
import ReactDOM from 'react-dom/client';
import burgerIngredientsStyles from './burger-ingredients.module.css';
import { Typography, Box, Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Item from '../item/item.js'


export default function BurgerIngredients(props) {
  return (
    <div className={`${burgerIngredientsStyles.container} mr-5 mt-5`}>
      <h1 className={'text text_type_main-large mt-5 mb-5'}>Соберите бургер</h1>
      <div className={burgerIngredientsStyles.tabs}>
        <tab className={'text text_type_main-default'}>Булки</tab>
        <tab className={'text text_type_main-default'}>Соусы</tab>
        <tab className={'text text_type_main-default'}>Начинки</tab>
      </div>
      <div className={burgerIngredientsStyles.items}>
        <h2 className={'text text_type_main-medium mt-5 mb-5'}>Булки</h2>
        <div className={burgerIngredientsStyles.block}>
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