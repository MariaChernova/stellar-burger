import React from 'react';
import appStyles from './app.module.css';

import AppHeader from '../app-header/app-header.js';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.js';
import BurgerConstructor from '../burger-constructor/burger-constructor.js';
import Modal from '../modal/modal.js'

export default function App() {
  const apiDomen = 'norma.nomoreparties.space';
  
  const [state, setState] = React.useState({ 
    ingredients: null,
    modalIsOpened: false,
    modalItem: null,
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

  const openModal = (data) => {
    setState({
      ...state,
      modalIsOpened: true,
      modalItem: data,
    })
  }

  const closeModal = () => {
    setState({
      ...state,
      modalIsOpened: false,
      modalItem: null,
    })
  }

  return (
    <div className={appStyles.container}>
      <AppHeader  />
      <main className={appStyles.main}>
        <h1 className={`${appStyles.constructorTitle} text text_type_main-large mb-5`}>Соберите бургер</h1>
        <div className={appStyles.constructor}>
          <BurgerIngredients data={state.ingredients} openModal={openModal}/>
          <BurgerConstructor data={state.ingredients}/>
        </div>
        {state.modalIsOpened && <Modal closeModal={closeModal} data={state.modalItem} /> }
      </main>
    </div>
  )
}