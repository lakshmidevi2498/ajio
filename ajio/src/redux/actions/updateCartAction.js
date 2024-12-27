import * as types from './actionTypes'
import { updateCartApi } from '../apis/updateCartApi'
import { toast } from 'react-toastify';

export const updateCartStart= () => ({
type:types.CART_PUT_START
})

export const updateCartSuccess = (data) => (
    console.log("this is putCartSuccessAction---->" ,data),
    {
    type:types.CART_PUT_SUCCESS,
    payload:data
})

export const updateCartError = (error) => (
    console.log("this is putCartErrorAction---->" ,error),
    {
    type:types.CART_PUT_ERROR,
    payload:error
})

export const updateCartInitiate = (userId,id,size,qty) => {
    return async (dispatch)=>{
        dispatch(updateCartStart())
        try {
          const updateCartdata = await updateCartApi(userId,id,size,qty)
          dispatch(updateCartSuccess(updateCartdata))
        //   navigate('/')
  
        } catch (err) {
          console.log("error",err)
          dispatch(updateCartError(err))
          toast.error("getting products data failed")
  
        }
    }
}