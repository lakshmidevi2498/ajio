
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
        console.log("this is  OrderPatchReducersuccessreducer----> ",action.payload);
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case types.ORDER_PATCH_ERROR:
        console.log("this is  OrderPatchReducererrorreducer----> ");
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}; 
