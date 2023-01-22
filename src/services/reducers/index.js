import { combineReducers } from 'redux';
import { order, modal, burgerConstructor, ingredients } from './reducers'

export const rootReducer = combineReducers({
  order,
  modal,
  burgerConstructor,
  ingredients
});
