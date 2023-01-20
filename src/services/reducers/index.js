import { combineReducers } from 'redux';

export const AppContextIntialValue = {
  ingredients: null,
  modal: null,
  order: null,
  constructor: {
    bun: '60d3b41abdacab0026a733c6',
    positions: [
      '60d3b41abdacab0026a733c8',
      '60d3b41abdacab0026a733ca',
      '60d3b41abdacab0026a733cc',
      '60d3b41abdacab0026a733c8',
      '60d3b41abdacab0026a733ca',
      '60d3b41abdacab0026a733cc',
    ],
  }
}

export const rootReducer = combineReducers({
  // step: stepReducer,
  // cart: cartReducer,
});