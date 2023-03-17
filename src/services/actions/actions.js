import { BASE_URL } from '../../utils/constants';
import { checkResponse } from '../../utils/checkResponse';

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAIL = 'GET_INGREDIENTS_FAIL';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const MOVE_INGREDIENT = 'MOVE_INGREDIENT';
export const SET_BUN = 'SET_BUN';
export const DELETE_ITEM = 'DELETE_ITEM';

export const OPEN_INGREDIENT_MODAL = 'OPEN_INGREDIENT_MODAL';
export const OPEN_ORDER_MODAL = 'OPEN_ORDER_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const MAKE_ORDER_REQUEST = 'MAKE_ORDER_REQUEST';
export const MAKE_ORDER_SUCCESS = 'MAKE_ORDER_SUCCESS';
export const MAKE_ORDER_FAIL = 'MAKE_ORDER_FAIL';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAIL = 'RESET_PASSWORD_FAIL';

export const SAVE_PASSWORD_REQUEST = 'SAVE_PASSWORD_REQUEST';
export const SAVE_PASSWORD_SUCCESS = 'SAVE_PASSWORD_SUCCESS';
export const SAVE_PASSWORD_FAIL = 'SAVE_PASSWORD_FAIL';

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAIL = 'CREATE_USER_FAIL';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';




export const getIngredients = () => {
  return async (dispatch) => {
    try {
      dispatch({type: GET_INGREDIENTS_REQUEST});
      
      const res = await fetch(`${BASE_URL}/ingredients`);
      const data = await checkResponse(res);
      dispatch({type: GET_INGREDIENTS_SUCCESS, ingredients: data.data});

    } catch (error) {
      dispatch({type: GET_INGREDIENTS_FAIL});
      console.log(`Error while trying data from server: ${error}`);
    }
  }
}

export const makeOrder = (bun, positions) => {
  return async (dispatch) => {
    try {
      dispatch({type: MAKE_ORDER_REQUEST});
      const res = await fetch(`${BASE_URL}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ingredients: [bun, ...positions.map((element) => element.id), bun]
        })
      });
      const data = await checkResponse(res);

      dispatch({type: MAKE_ORDER_SUCCESS, orderId: data.order.number});

      dispatch({
        type: OPEN_ORDER_MODAL,
        id: data.order.number
      });

    } catch (error) {
      dispatch({type: MAKE_ORDER_FAIL});
      console.log(`Error while trying data from server: ${error}`);
    }
  }
};

export const resetPassword = () => {
  return async (dispatch) => {
    try {
      dispatch({type: RESET_PASSWORD_REQUEST});
      const res = await fetch(`${BASE_URL}/password-reset`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: ""
        })
      });
      const data = await checkResponse(res);

      // TODO: перенаправить пользователя
      dispatch({type: RESET_PASSWORD_SUCCESS, orderId: data.order.number});

      dispatch({
        type: OPEN_ORDER_MODAL,
        id: data.order.number
      });

    } catch (error) {
      dispatch({type: MAKE_ORDER_FAIL});
      console.log(`Error while trying data from server: ${error}`);
    }
  }
};

export const savePassword = () => {
  return async (dispatch) => {
    try {
      dispatch({type: SAVE_PASSWORD_REQUEST});
      const res = await fetch(`${BASE_URL}/password-reset/reset`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emapassword: "",
          token: ""
        })
      });
      const data = await checkResponse(res);

      dispatch({type: SAVE_PASSWORD_SUCCESS});

      dispatch({
        type: OPEN_ORDER_MODAL,
        id: data.order.number
      });

    } catch (error) {
      dispatch({type: SAVE_PASSWORD_FAIL});
      console.log(`Error while trying data from server: ${error}`);
    }
  }
};

export const createUser = (name, email, password) => {
  return async (dispatch) => {
    try {
      dispatch({type: CREATE_USER_REQUEST});
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email, password, name
        })
      });
      const data = await checkResponse(res);
      console.log(data);
      dispatch({
        type: CREATE_USER_SUCCESS,
        user: data.user,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken
      });

    } catch (error) {
      dispatch({type: CREATE_USER_FAIL});
      console.log(`Error while getting data from server: ${error}`);
    }
  }
}

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({type: LOGIN_REQUEST});
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email, password
        })
      });
      const data = await checkResponse(res);
      console.log(data);
      dispatch({
        type: LOGIN_SUCCESS,
        user: data.user,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken
      });

    } catch (error) {
      dispatch({type: LOGIN_FAIL});
      console.log(`Error while getting data from server: ${error}`);
    }
  }
}