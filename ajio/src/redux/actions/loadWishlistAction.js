import * as types from './actionTypes'
import { loadWishlistApi } from '../apis/loadWishlistApi'
import { toast } from 'react-toastify';

export const loadWishlistStart= () => ({
type:types.WISHLIST_LOAD_START
})

export const loadWishlistSuccess = (data) => (
    {
    type:types.WISHLIST_LOAD_SUCCESS,
    payload:data
})

export const loadWishlistError = (error) => (
    {
    type:types.WISHLIST_LOAD_ERROR,
    payload:error
})

export const loadWishlistInitiate = (userId) => {
    return async (dispatch)=>{
        dispatch(loadWishlistStart())
        try {
          const loadWishlistdata = await loadWishlistApi(userId)
          dispatch(loadWishlistSuccess(loadWishlistdata))
  
        } catch (err) {
          console.log("error",err)
          dispatch(loadWishlistError(err))
          toast.error("getting wishlist data failed")
  
        }
    }
}