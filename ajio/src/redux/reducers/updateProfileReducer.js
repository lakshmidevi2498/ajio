
import * as types from "../actions/actionTypes";

const initialState = {
  data: [],
  error: null,
  loading: false,
};

export const updateProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PROFILE_PUT_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.PROFILE_PUT_SUCCESS:
        console.log("this is loadProfileReducersuccessreducer----> ",action.payload);
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case types.PROFILE_PUT_ERROR:
        console.log("this is loadProfileReducererrorreducer----> ");
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
