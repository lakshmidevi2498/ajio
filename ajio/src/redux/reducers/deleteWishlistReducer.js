
import * as types from "../action/actionTypes";

const initialState = {
  data: [],
  error: null,
  loading: false,
};

export const deleteWishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.WISHLIST_DELETE_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.WISHLIST_DELETE_SUCCESS: 
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case types.WISHLIST_DELETE_ERROR: 
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
