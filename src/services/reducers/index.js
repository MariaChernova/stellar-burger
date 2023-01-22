import { combineReducers } from 'redux';
import { order, modal, constructor, ingredients } from './reducers'

export const rootReducer = combineReducers({
  order,
  modal,
  constructor,
  ingredients
});