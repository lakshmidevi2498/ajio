import * as types from './actionTypes'
import { postWishlistApi } from '../apis/postWishlistApi'
import { toast } from 'react-toastify';

export const postWishlistStart= () => ({
type:types.WISHLIST_POST_START
})

export const postWishlistSuccess = (data) => (
    {
    type:types.WISHLIST_POST_SUCCESS,
    payload:data
})

export const postWishlistError = (error) => (
    {
    type:types.WISHLIST_POST_ERROR,
    payload:error
})

export const postWishlistInitiate = (userId,productId) => {
    return async (dispatch)=>{
        dispatch(postWishlistStart())
        try {
          const postWishlistdata = await postWishlistApi(userId,productId)
          dispatch(postWishlistSuccess(postWishlistdata))
  
        } catch (err) {
          console.log("error",err)
          dispatch(postWishlistError(err))
          toast.error("getting products data failed")
  
        }
    }
}