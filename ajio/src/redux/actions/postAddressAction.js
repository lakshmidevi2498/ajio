import * as types from './actionTypes'
import { postAddressApi } from '../apis/postAddressApi.js'
import { toast } from 'react-toastify';

export const postAddressStart= () => ({
type:types.ADDRESS_POST_START
})

export const postAddressSuccess = (data) => (
    {
    type:types.ADDRESS_POST_SUCCESS,
    payload:data
})

export const postAddressError = (error) => (
    {
    type:types.ADDRESS_POST_ERROR,
    payload:error
})

export const postAddressInitiate = (values,userId,navigate) => {
    return async (dispatch)=>{
        dispatch(postAddressStart())
        try {
          const postAddressdata = await postAddressApi(values,userId)
          dispatch(postAddressSuccess(postAddressdata))
  
        } catch (err) {
          console.log("error",err)
          dispatch(postAddressError(err))
          toast.error("getting products data failed")
  
        }
    }
}