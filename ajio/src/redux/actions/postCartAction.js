import * as types from './actionTypes'
import {postCartApi} from '../apis/postCartApi'
import { toast } from 'react-toastify';

export const postCartStart= () => ({
type:types.CART_POST_START
})

export const postCartSuccess = (data) => (
    {
    type:types.CART_POST_SUCCESS,
    payload:data
})

export const postCartError = (error) => (
    {
    type:types.CART_POST_ERROR,
    payload:error
})

export const postCartInitiate = (userId,productId,size) => {
    return async (dispatch)=>{
        dispatch(postCartStart())
        try {
          const postCartdata = await postCartApi(userId,productId,size)
          dispatch(postCartSuccess(postCartdata)) 
  
        } catch (err) {
          console.log("error",err)
          dispatch(postCartError(err))
          toast.error("getting products data failed")
  
        }
    }
}