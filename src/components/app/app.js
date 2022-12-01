import React from 'react';
import appStyles from './app.module.css';

import AppHeader from '../app-header/app-header.js';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.js';
import BurgerConstructor from '../burger-constructor/burger-constructor.js';

export default function App() {
  return (
    <div>
      <AppHeader  />
      {/* <BurgerIngredients />
      <BurgerConstructor /> */}
    </div>
  )
}