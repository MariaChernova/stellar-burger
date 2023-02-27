import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import Registration from '../registration/registration.jsx';
import ForgotPassword from '../forgot-password/forgot-password';
import ResetPassword from '../reset-password/reset-password';
import Profile from '../profile/profile';
import FullPage from '../full-page/full-page';
import OrderFeed from '../order-feed/order-feed'
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import Modal from '../modal/modal.jsx';
import IngredientDetails from '../ingredient-details/ingredient-details.jsx';
import OrderDetails from '../order-details/order-details.jsx';
import { getIngredients } from '../../services/actions/actions';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';


const MODAL_TYPE_INGREDIENTS = 'ingredients';
const MODAL_TYPE_ORDER_DETAILS = 'order';

export default function App() {
  const dispatch = useDispatch();
  const modal = useSelector(store => store.modal);
  

  React.useEffect(() => {
    dispatch(getIngredients());
  }, [])

  return (
    <div className={appStyles.container}>
      <AppHeader  />
      
      <main className={appStyles.main}>
        {/* <SignIn /> */}
        {/* <Registration /> */}
        {/* <ForgotPassword /> */}
        {/* <ResetPassword /> */}
        {/* <Profile /> */}
        {/* <FullPage /> */}
        <OrderFeed />
        {/* <h1 className={`${appStyles.constructorTitle} text text_type_main-large mb-5`}>Соберите бургер</h1>
        <div className={appStyles.constructor} >
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </div> */}
        {modal && 
        <Modal header={modal.header}>
          {modal.type === MODAL_TYPE_INGREDIENTS && <IngredientDetails data={modal.item} />}
          {modal.type === MODAL_TYPE_ORDER_DETAILS && <OrderDetails id={modal.id}/>}
        </Modal>}
      </main>
    </div>
  )
}
