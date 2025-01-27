
import * as types from "../actions/actionTypes";

const initialState = {
  data: [],
  error: null,
  loading: false,
};

 export const  orderPatchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ORDER_PATCH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.ORDER_PATCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case types.ORDER_PATCH_ERROR: 
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}; 
