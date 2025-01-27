import * as types from './actionTypes'
import { deleteCartApi } from '../apis/deleteCartApi'
import { toast } from 'react-toastify';

export const deleteCartStart= () => ({
type:types.CART_DELETE_START
})

export const deleteCartSuccess = (data) => (
    {
    type:types.CART_DELETE_SUCCESS,
    payload:data
})

export const deleteCartError = (error) => (
    {
    type:types.CART_DELETE_ERROR,
    payload:error
})

export const deleteCartInitiate = (userId,productId) => {
    return async (dispatch)=>{
        dispatch(deleteCartStart())
        try {
          const deleteCartdata = await deleteCartApi(userId,productId)
          dispatch(deleteCartSuccess(deleteCartdata))
  
        } catch (err) {
          console.log("error",err)
          dispatch(deleteCartError(err))
          toast.error("getting products data failed")
  
        }
    }
}