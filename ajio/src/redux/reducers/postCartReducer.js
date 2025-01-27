
import * as types from "../action/actionTypes";

const initialState = {
  data: [],
  error: null,
  loading: false,
};

export const postCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CART_POST_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.CART_POST_SUCCESS: 
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case types.CART_POST_ERROR: 
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
