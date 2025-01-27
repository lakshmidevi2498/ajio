import * as types from '../actions/actionTypes';

const initialState = {
  data: [],
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
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case types.MOBILE_LOGIN_ERROR: 
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.RESET_MOBILE_DATA:  
      return {
        ...state,
        data: [],  
        error: null,
        loading: false,
      };
    default:
      return state;
  }
};
