import * as types from './actionTypes'
import { mobileLoginApi } from '../apis/mobileLoginApi';
// import { toast } from 'react-toastify';

export const mobileLoginStart= () => ({
type:types.MOBILE_LOGIN_START
})

export const mobileLoginSuccess = (data) => (
    console.log("this is mobileLoginSuccessAction---->" ,data),
    {
    type:types.MOBILE_LOGIN_SUCCESS,
    payload:data
}

)

export const resetMobileData = () => ({
  type: types.RESET_MOBILE_DATA
});

export const mobileLoginError = (error) => (
    console.log("this is mobileLoginErrorAction---->" ,error),
    {
    type:types.MOBILE_LOGIN_ERROR,
    payload:error
})

export const mobileLoginInitiate = (phoneNumber,providerId,uId) => {
  console.log("phoneNumber",phoneNumber,providerId)
    return async (dispatch)=>{
        dispatch(mobileLoginStart())
        try {
          const mobileLogindata = await mobileLoginApi(phoneNumber,providerId,uId)
          console.log("mobileLogindata",mobileLogindata)
          dispatch(mobileLoginSuccess(mobileLogindata))
        //   navigate('/')
  
        } catch (err) {
          console.log("error",err)
          dispatch(mobileLoginError(err))
          // toast.error("getting products data failed")
  
        }
    }
}