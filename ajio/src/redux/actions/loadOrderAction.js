import * as types from './actionTypes'
import { loadOrderApi } from '../apis/loadOrderApi.js'
import { toast } from 'react-toastify';

export const loadOrderStart= () => ({
type:types.ORDER_LOAD_START
})

export const loadOrderSuccess = (data) => (
    console.log("this is loadOrderSuccessAction---->" ,data),
    {
    type:types.ORDER_LOAD_SUCCESS,
    payload:data
})

export const loadOrderError = (error) => (
    console.log("this is loadOrderErrorAction---->" ,error),
    {
    type:types.ORDER_LOAD_ERROR,
    payload:error
})

export const loadOrderInitiate = (userId) => {
    return async (dispatch)=>{
        dispatch(loadOrderStart())
        try {
          const loadOrderdata = await loadOrderApi(userId)
          dispatch(loadOrderSuccess(loadOrderdata))
        //   navigate('/')
  
        } catch (err) {
          console.log("error",err)
          dispatch(loadOrderError(err))
          toast.error("getting products data failed")
  
        }
    }
}