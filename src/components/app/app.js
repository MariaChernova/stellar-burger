import React from 'react';
import appStyles from './app.module.css';

import AppHeader from '../app-header/app-header.js';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.js';
import BurgerConstructor from '../burger-constructor/burger-constructor.js';
import Modal from '../modal/modal.js';
import IngredientDetails from '../ingredient-details/ingredient-details.js';
import OrderDetails from '../order-details/order-details.js';


const MODAL_TYPE_INGREDIENTS = 'ingredients';
const MODAL_TYPE_ORDER_DETAILS = 'order';

export default function App() {
  const apiDomen = 'norma.nomoreparties.space';
  
  const [state, setState] = React.useState({ 
    ingredients: null,
    modal: null,
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

  const openIngredientModal = (data) => {
    setState({
      ...state,
      modal : {
        header: 'Детали ингредиента',
        type: MODAL_TYPE_INGREDIENTS,
        item: data,
      }
    })
  }

  const openOrderModal = () => {
    setState({
      ...state,
      modal : {
        header: '',
        type: MODAL_TYPE_ORDER_DETAILS,
        id: '034536',
      }
    })
  }

  const closeModal = () => {
    setState({
      ...state,
      modal: null,
    })
  }

  return (
    <div className={appStyles.container}>
      <AppHeader  />
      <main className={appStyles.main}>
        <h1 className={`${appStyles.constructorTitle} text text_type_main-large mb-5`}>Соберите бургер</h1>
        <div className={appStyles.constructor}>
          <BurgerIngredients data={state.ingredients} openIngredientModal={openIngredientModal}/>
          <BurgerConstructor data={state.ingredients} openOrderModal={openOrderModal}/>
        </div>
        {state.modal && 
        <Modal onClose={closeModal} header={state.modal.header}>
          {state.modal.type === MODAL_TYPE_INGREDIENTS && <IngredientDetails data={state.modal.item} />}
          {state.modal.type === MODAL_TYPE_ORDER_DETAILS && <OrderDetails id={state.modal.id}/>}
        </Modal>}
      </main>
    </div>
  )
}