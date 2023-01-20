import React from 'react';
import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header.jsx';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import Modal from '../modal/modal.jsx';
import IngredientDetails from '../ingredient-details/ingredient-details.jsx';
import OrderDetails from '../order-details/order-details.jsx';
import {AppContextIntialValue, AppContext} from '../../services/appContext'


export const API_DOMEN = 'norma.nomoreparties.space';
const MODAL_TYPE_INGREDIENTS = 'ingredients';
const MODAL_TYPE_ORDER_DETAILS = 'order';

export default function App() {
  
  const [state, setState] = React.useState(AppContextIntialValue);

  React.useEffect(() => {
    const getIngredients = async () => {
      try {
        const url = `https://${API_DOMEN}/api/ingredients`;
        const res = await fetch(url);
        if (!res.ok) {
          throw res.statusText;
        }
        const data = await res.json();
        setState({
          ...state,
          ingredients: data.data
        });
      } catch (error) {
        console.log(`Error while trying data from server: ${error}`);
      }
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

  const openOrderModal = (orderNumber) => {
    setState({
      ...state,
      modal : {
        header: '',
        type: MODAL_TYPE_ORDER_DETAILS,
        id: orderNumber,
      }
    });
  }

  const closeModal = () => {
    setState({
      ...state,
      modal: null,
    });
  }

  return (
    <div className={appStyles.container}>
      <AppContext.Provider value={state}>
        <AppHeader  />
        <main className={appStyles.main}>
          <h1 className={`${appStyles.constructorTitle} text text_type_main-large mb-5`}>Соберите бургер</h1>
          <div className={appStyles.constructor}>
            <BurgerIngredients openIngredientModal={openIngredientModal}/>
            <BurgerConstructor openOrderModal={openOrderModal}/>
          </div>
          {state.modal && 
          <Modal onClose={closeModal} header={state.modal.header}>
            {state.modal.type === MODAL_TYPE_INGREDIENTS && <IngredientDetails data={state.modal.item} />}
            {state.modal.type === MODAL_TYPE_ORDER_DETAILS && <OrderDetails id={state.modal.id}/>}
          </Modal>}
        </main>
      </AppContext.Provider>
    </div>
  )
}
