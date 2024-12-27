
import * as types from "../actions/actionTypes";

const initialState = {
  data: [],
  error: null,
  loading: false,
};

export const postInvoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INVOICE_POST_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.INVOICE_POST_SUCCESS:
        console.log("this is postInvoiceReducersuccessreducer----> ",action.payload);
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case types.INVOICE_POST_ERROR:
        console.log("this is postInvoiceReducererrorreducer----> ");
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
