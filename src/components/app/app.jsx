import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header.jsx';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import Modal from '../modal/modal.jsx';
import IngredientDetails from '../ingredient-details/ingredient-details.jsx';
import OrderDetails from '../order-details/order-details.jsx';
import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_FAIL } from '../../services/reducers/reducers';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';




export const API_DOMEN = 'norma.nomoreparties.space';
const MODAL_TYPE_INGREDIENTS = 'ingredients';
const MODAL_TYPE_ORDER_DETAILS = 'order';

export default function App() {
  const dispatch = useDispatch();
  const modal = useSelector(store => store.modal);
  

  React.useEffect(() => {
    const getIngredients = async () => {
      try {
        dispatch({type: GET_INGREDIENTS_REQUEST});
        const res = await fetch(`https://${API_DOMEN}/api/ingredients`);
        if (!res.ok) {
          throw res.statusText;
        }
        const data = await res.json();
        dispatch({type: GET_INGREDIENTS_SUCCESS, ingredients: data.data});
      } catch (error) {
        dispatch({type: GET_INGREDIENTS_FAIL});
        console.log(`Error while trying data from server: ${error}`);
      }
    }

    getIngredients();
  }, [])

  return (
    <div className={appStyles.container}>
      <AppHeader  />
      <main className={appStyles.main}>
        <h1 className={`${appStyles.constructorTitle} text text_type_main-large mb-5`}>Соберите бургер</h1>
        <div className={appStyles.constructor} >
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </div>
        {modal && 
        <Modal header={modal.header}>
          {modal.type === MODAL_TYPE_INGREDIENTS && <IngredientDetails data={modal.item} />}
          {modal.type === MODAL_TYPE_ORDER_DETAILS && <OrderDetails id={modal.id}/>}
        </Modal>}
      </main>
    </div>
  )
}
