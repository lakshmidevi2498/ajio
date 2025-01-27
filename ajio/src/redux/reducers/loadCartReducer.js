
import * as types from "../actions/actionTypes";

const initialState = {
  data: [],
  error: null,
  loading: false,
};

export const loadCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CART_LOAD_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.CART_LOAD_SUCCESS: 
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case types.CART_LOAD_ERROR: 
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
