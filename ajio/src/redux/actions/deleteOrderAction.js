import * as types from './actionTypes'
import { deleteOrderApi } from '../apis/deleteOrderApi.js'
import { toast } from 'react-toastify';

export const deleteOrderStart= () => ({
type:types.ORDER_DELETE_START
})

export const deleteOrderSuccess = (data) => (
    {
    type:types.ORDER_DELETE_SUCCESS,
    payload:data
})

export const deleteOrderError = (error) => (
    {
    type:types.ORDER_DELETE_ERROR,
    payload:error
})

export const deleteOrderInitiate = (id,price,bagTotal,bagDiscount,orderTotal,addressId,paymentDetails) => {
    return async (dispatch)=>{
        dispatch(deleteOrderStart())
        try {
          const deleteOrderdata = await deleteOrderApi(id,price,bagTotal,bagDiscount,orderTotal,addressId ,paymentDetails)
          dispatch(deleteOrderSuccess(deleteOrderdata))
  
        } catch (err) {
          console.log("error",err)
          dispatch(deleteOrderError(err))
          toast.error("getting products data failed")
  
        }
    }
}