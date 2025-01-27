
import * as types from "../actions/actionTypes";

const initialState = {
  data: [],
  error: null,
  loading: false,
};

export const googleLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GOOGLE_LOGIN_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GOOGLE_LOGIN_SUCCESS: 
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case types.GOOGLE_LOGIN_ERROR: 
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
