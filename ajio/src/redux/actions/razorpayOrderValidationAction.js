import * as types from './actionTypes'
import { razorpayOrderValidateApi } from '../apis/razorpayOrderValidationApi.js'

export const razorpayOrderValidateStart= () => ({
type:types.RAZORPAY_ORDER_VALIDATE_POST_START
})

export const razorpayOrderValidateSuccess = (data) => (
    {
    type:types.RAZORPAY_ORDER_VALIDATE_POST_SUCCESS,
    payload:data
})

export const razorpayOrderValidateError = (error) => (
    {
    type:types.RAZORPAY_ORDER_VALIDATE_POST_ERROR,
    payload:error
})

export const razorpayOrderValidateInitiate = (body) => {
    return async (dispatch)=>{
        dispatch(razorpayOrderValidateStart())
        try {
          const razorpayOrderValidatedata = await razorpayOrderValidateApi(body)
          dispatch(razorpayOrderValidateSuccess(razorpayOrderValidatedata))
  
        } catch (err) {
          console.log("error",err)
          dispatch(razorpayOrderValidateError(err))
  
        }
    }
}