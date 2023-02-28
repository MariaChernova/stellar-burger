import React from 'react';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients.jsx';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor.jsx';
import Modal from '../../components/modal/modal.jsx';
import IngredientDetails from '../../components/ingredient-details/ingredient-details.jsx';
import OrderDetails from '../../components/order-details/order-details.jsx';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';
import homeStyles from './home.module.css';
import { getIngredients } from '../../services/actions/actions';


const MODAL_TYPE_INGREDIENTS = 'ingredients';
const MODAL_TYPE_ORDER_DETAILS = 'order';

export function HomePage() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getIngredients());
  }, [])

  const modal = useSelector(store => store.modal);

  return (
    <main className={homeStyles.main}>
      <h1 className={`${homeStyles.constructorTitle} text text_type_main-large mb-5`}>Соберите бургер</h1>
      <div className={homeStyles.constructor} >
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
  )
}

