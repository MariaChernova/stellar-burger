const MODAL_TYPE_INGREDIENTS = 'ingredients';
const MODAL_TYPE_ORDER_DETAILS = 'order';


export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAIL = 'GET_INGREDIENTS_FAIL';

export const GET_CONSTRUCTOR_INGREDIENTS = 'GET_CONSTRUCTOR_INGREDIENTS';
export const OPEN_INGREDIENT_MODAL = 'OPEN_INGREDIENT_MODAL';
export const OPEN_ORDER_MODAL = 'OPEN_ORDER_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const MAKE_ORDER_REQUEST = 'MAKE_ORDER_REQUEST';
export const MAKE_ORDER_SUCCESS = 'MAKE_ORDER_SUCCESS';
export const MAKE_ORDER_FAIL = 'MAKE_ORDER_FAIL';


export const ingredientsInitialState = {
  items: null,
  request: false,
  failed: false,
}


export const ingredients = (state = ingredientsInitialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        request: true,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        items: action.ingredients,
        request: false,
      };
    }
    case GET_INGREDIENTS_FAIL: {
      return {
        ...state,
        request: false,
        failed: true
      };
    }
    default: {
      return state;
    }
  }
}

export const constructorInitialState = {
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

export const burgerConstructor = (state = constructorInitialState, action) => {
  switch (action.type) {
    case GET_CONSTRUCTOR_INGREDIENTS: {
      return {
        ...state,
        bun: action.bun,
        positions: action.positions
      };
    }
    default: {
      return state;
    }
  }
}

export const modal = (state = null, action) => {
  switch (action.type) {
    case OPEN_INGREDIENT_MODAL: {
      return {
        header: 'Детали ингредиента',
        type: MODAL_TYPE_INGREDIENTS,
        item: action.data,
      }
    }
    case OPEN_ORDER_MODAL: {
      return {
        header: '',
        type: MODAL_TYPE_ORDER_DETAILS,
        id: action.id,
      }
    }
    case CLOSE_MODAL: {
      return null;
    }
    default: {
      return state;
    }
  }
}

export const orderInitialState = {
  orderId: null,
  orderRequest: false,
  orderFailed: false,
}

export const order = (state = orderInitialState, action) => {
  switch (action.type) {
    case MAKE_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true
      };
    }
    case MAKE_ORDER_SUCCESS: {
      return {
        ...state,
        orderId: action.orderId,
        orderRequest: false
      };
    }
    case MAKE_ORDER_FAIL: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true
      };
    }
    default: {
      return state;
    }
  }
}
