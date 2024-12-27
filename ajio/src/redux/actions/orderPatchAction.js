import * as types from './actionTypes'
import { OrderpatchApi } from '../apis/OrderPatchApi'
import { toast } from 'react-toastify';

export const OrderPatchStart= () => ({
type:types.ORDER_PATCH_START
})

export const OrderPatchSuccess = (data) => (
    console.log("this is  OrderSuccessAction---->" ,data),
    {
    type:types.ORDER_PATCH_SUCCESS,
    payload:data
})

export const  OrderPatchError = (error) => (
    console.log("this is  OrderErrorAction---->" ,error),
    {
    type:types.ORDER_PATCH_ERROR,
    payload:error
})

export const OrderPatchInitiate = (body) => {
    return async (dispatch)=>{
        dispatch(OrderPatchStart())
        try {
          const OrderPatchdata = await OrderpatchApi(body)
          dispatch(OrderPatchSuccess(OrderPatchdata))
        //   navigate('/')
  
        } catch (err) {
          console.log("error",err)
          dispatch(OrderPatchError(err))
          toast.error("getting products data failed")
  
        }
    }
}