
import * as types from "../actions/actionTypes";

const initialState = {
  data: [],
  error: null,
  loading: false,
};

export const loadOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ORDER_LOAD_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.ORDER_LOAD_SUCCESS:
        console.log("this is loadOrderReducersuccessreducer----> ",action.payload);
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case types.ORDER_LOAD_ERROR:
        console.log("this is loadOrderReducererrorreducer----> ");
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
