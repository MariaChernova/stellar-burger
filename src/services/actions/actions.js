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


export const getIngredients = () => {
  return async (dispatch) => {
    try {
      dispatch({type: GET_INGREDIENTS_REQUEST});
      
      const res = await fetch(`${BASE_URL}/ingredients`);
      checkResponse(res);

      const data = await res.json();
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
      checkResponse(res);
      const data = await res.json();

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


// export const getOrderInfo = (orderNumber) => {
//   return function (dispatch) {
//     dispatch(getOrderInfoLoading())

//     mainApi.getOrderInfo(orderNumber)
//       .then(data => {
//         if (data) {
//           dispatch(getOrderInfoLoadingSuccess(data.orders[0]))
//         }
//       })
//       .catch(() => dispatch(getOrderInfoLoadingFailed()))
//   }
// }

// export const getIngredients = () => {
//     dispatch({
//       type: GET_INGREDIENTS,
//     });

//     mainApi
//       .getIngredients()
//       .then((ingredientsData) => {
//         if (ingredientsData) {
//           dispatch({
//             type: GET_INGREDIENTS_SUCCESS,
//             payload: ingredientsData.data,
//           });
//         }
//       })
//       .catch(() =>
//         dispatch({
//           type: GET_INGREDIENTS_FAILED,
//         })
//       );
//   };
// }