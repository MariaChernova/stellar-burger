import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAIL,
  ADD_INGREDIENT,
  MOVE_INGREDIENT,
  SET_BUN,
  DELETE_ITEM,
  OPEN_INGREDIENT_MODAL,
  OPEN_ORDER_MODAL,
  CLOSE_MODAL,
  MAKE_ORDER_REQUEST,
  MAKE_ORDER_SUCCESS,
  MAKE_ORDER_FAIL,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../actions/actions';

const MODAL_TYPE_INGREDIENTS = 'ingredients';
const MODAL_TYPE_ORDER_DETAILS = 'order';

const ingredientsInitialState = {
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
  bun: null,
  positions: [],
}

export const burgerConstructor = (state = constructorInitialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      return {
        ...state,
        positions: [...state.positions, {id: action.id, uuid: action.uuid} ]
      };
    }
    case MOVE_INGREDIENT: {
      if (typeof action.to === 'undefined') {
        return {
          ...state,
          positions: [...state.positions.filter((_, index) => index !== action.from), {id: action.id, uuid: action.uuid}]
        };
      } else {
        const positions = state.positions.slice();
        positions.splice(action.to, 0, positions.splice(action.from, 1)[0]);
        return {
          ...state,
          positions
        };
      }
    }
    case SET_BUN: {
      return {
        ...state,
        bun: action.id
      };
    }
    case DELETE_ITEM: {
      return {
        ...state,
        positions: state.positions.filter((_, index) => index !== action.index)
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

export const userInitialState = {
  user: null,
  registrationRequest: false,
  registrationFailed: false
}

export const user = (state = userInitialState, action) => {
  switch (action.type) {
    case CREATE_USER_REQUEST: {
      return {
        ...state,
        registrationRequest: true
      };
    }
    case CREATE_USER_SUCCESS: {
      return {
        ...state,
        registrationRequest: false,
        user: action.user,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken
      };
    }
    case CREATE_USER_FAIL: {
      return {
        ...state,
        registrationRequest: false,
        registrationFailed: true
      };
    }
    default: {
      return state;
    }
  }
}

export const loginInitialState = {
  user: null,
  loginRequest: false,
  loginFailed: false
}

export const login = (state = userInitialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        loginRequest: true
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loginRequest: false,
        user: action.user,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken
      };
    }
    case LOGIN_FAIL: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: true
      };
    }
    default: {
      return state;
    }
  }
}