
import * as types from '../actions/actionTypes';
const initialState = {
    
      data: [] ,
    
    error: null,
    loading: false,
  };

export const loadProductsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_PRODUCTS_DATA_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.LOAD_PRODUCTS_DATA_SUCCESS: 
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case types.LOAD_PRODUCTS_DATA_ERROR: 
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
