
import * as types from "../actions/actionTypes";

const initialState = {
  data: [],
  error: null,
  loading: false,
};

export const updateCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CART_PUT_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.CART_PUT_SUCCESS:
        console.log("this is loadCartReducersuccessreducer----> ",action.payload);
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case types.CART_PUT_ERROR:
        console.log("this is loadCartReducererrorreducer----> ");
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
