
import * as types from "../actions/actionTypes";

const initialState = {
  data: [],
  error: null,
  loading: false,
};

export const razorpayOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.RAZORPAY_ORDER_POST_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.RAZORPAY_ORDER_POST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case types.RAZORPAY_ORDER_POST_ERROR:
        console.log("this is razorpayOrderReducererrorreducer----> ");
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
