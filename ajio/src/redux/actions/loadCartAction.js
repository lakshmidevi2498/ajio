import * as types from './actionTypes'
import { loadCartApi } from '../apis/loadCartApi'
import { toast } from 'react-toastify';

export const loadCartStart= () => ({
type:types.CART_LOAD_START
})

export const loadCartSuccess = (data) => (
    {
    type:types.CART_LOAD_SUCCESS,
    payload:data
})

export const loadCartError = (error) => (
    {
    type:types.CART_LOAD_ERROR,
    payload:error
})

export const loadCartInitiate = (token,userId) => {
    return async (dispatch)=>{
        dispatch(loadCartStart())
        try {
          const loadCartdata = await loadCartApi(token,userId)
          dispatch(loadCartSuccess(loadCartdata))
  
        } catch (err) {
          console.log("error",err)
          dispatch(loadCartError(err))
          toast.error("getting products data failed")
  
        }
    }
}