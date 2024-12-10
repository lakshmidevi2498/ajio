
import * as types from '../actions/actionTypes';
const initialState = {
    
      data: [] ,
    
    error: null,
    loading: false,
  };

export const mobileLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MOBILE_LOGIN_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.MOBILE_LOGIN_SUCCESS:
        console.log("this is loadProductsDatasuccessreducer----> ",action.payload );
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case types.MOBILE_LOGIN_ERROR:
        console.log("this is loadProductsDataerrorreducer----> ");
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
