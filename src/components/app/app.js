import React from 'react';
import appStyles from './app.module.css';

import AppHeader from '../app-header/app-header.js';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.js';
import BurgerConstructor from '../burger-constructor/burger-constructor.js';

export default function App() {
  const apiDomen = 'norma.nomoreparties.space';
  
  const [state, setState] = React.useState({ 
    ingredients: null,
  })

  React.useEffect(() => {
    const getIngredients = async () => {
      const url = `https://${apiDomen}/api/ingredients`;
      const res = await fetch(url);
      const data = await res.json();
      setState({ ingredients: data.data });
      // TODO: Handle errors
    }

    getIngredients();
  }, [])

  return (
    <div className={appStyles.container}>
      <AppHeader  />
      <main className={appStyles.main}>
        <h1 className={`${appStyles.constructorTitle} text text_type_main-large mb-5`}>Соберите бургер</h1>
        <div className={appStyles.constructor}>
          <BurgerIngredients data={state.ingredients}/>
          <BurgerConstructor data={state.ingredients}/>
        </div>
      </main>
    </div>
  )
}