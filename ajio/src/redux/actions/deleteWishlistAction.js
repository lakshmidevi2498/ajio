import * as types from './actionTypes'
import { deleteWishlistApi } from '../apis/deleteWishlistApi'
import { toast } from 'react-toastify';

export const deleteWishlistStart= () => ({
type:types.WISHLIST_DELETE_START
})

export const deleteWishlistSuccess = (data) => (
    {
    type:types.WISHLIST_DELETE_SUCCESS,
    payload:data
})

export const deleteWishlistError = (error) => (
    {
    type:types.WISHLIST_DELETE_ERROR,
    payload:error
})

export const deleteWishlistInitiate = (userId,productId) => {
    return async (dispatch)=>{
        dispatch(deleteWishlistStart())
        try {
          const deleteWishlistdata = await deleteWishlistApi(userId,productId)
          dispatch(deleteWishlistSuccess(deleteWishlistdata))
  
        } catch (err) {
          console.log("error",err)
          dispatch(deleteWishlistError(err))
          toast.error("getting products data failed")
  
        }
    }
}