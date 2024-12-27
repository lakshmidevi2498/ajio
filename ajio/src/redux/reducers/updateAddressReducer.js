
import * as types from "../actions/actionTypes";

const initialState = {
  data: [],
  error: null,
  loading: false,
};

export const updateAddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADDRESS_PUT_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.ADDRESS_PUT_SUCCESS:
        console.log("this is loadAddressReducersuccessreducer----> ",action.payload);
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case types.ADDRESS_PUT_ERROR:
        console.log("this is loadAddressReducererrorreducer----> ");
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
