
import * as types from "../actions/actionTypes";

const initialState = {
  data: [],
  error: null,
  loading: false,
};

export const loadContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CONTENT_LOAD_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.CONTENT_LOAD_SUCCESS:
        console.log("this is loadContentReducersuccessreducer----> ",action.payload);
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case types.CONTENT_LOAD_ERROR:
        console.log("this is loadContentReducererrorreducer----> ");
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
