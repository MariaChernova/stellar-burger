import React from 'react';
import appStyles from './app.module.css';

import AppHeader from '../app-header/app-header.js';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.js';
import BurgerConstructor from '../burger-constructor/burger-constructor.js';
import data from '../../utils/data.js';

export default function App() {
  return (
    <div>
      <AppHeader  />
      <main className={appStyles.main}>
        <BurgerIngredients data={data}/>
        <BurgerConstructor />
      </main>
    </div>
  )
}