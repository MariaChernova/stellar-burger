import React from 'react';
import ReactDOM from 'react-dom/client';
import burgerIngredientsStyles from './burger-ingredients.module.css';
import { Typography, Box, Tab } from '@ya.praktikum/react-developer-burger-ui-components'


export default function BurgerIngredients() {
  return (
    <div className={burgerIngredientsStyles.container}>
      <h1 className={'text text_type_main-large'}>Соберите бургер</h1>
      <div className={burgerIngredientsStyles.tabs}>
        <tab>Булки</tab>
        <tab>Соусы</tab>
        <tab>Начинки</tab>
      </div>
      <div className={burgerIngredientsStyles.bread}>
        <h2 className={'text text_type_main-medium'}>Булки</h2>
        <div>
          
        </div>
      </div>
    </div>
  )
}