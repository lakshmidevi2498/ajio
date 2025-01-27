import * as types from './actionTypes'
import { mobileLoginApi } from '../apis/mobileLoginApi';

export const mobileLoginStart= () => ({
type:types.MOBILE_LOGIN_START
})

export const mobileLoginSuccess = (data) => (
    {
    type:types.MOBILE_LOGIN_SUCCESS,
    payload:data
}

)

export const resetMobileData = () => ({
  type: types.RESET_MOBILE_DATA
});

export const mobileLoginError = (error) => (
    {
    type:types.MOBILE_LOGIN_ERROR,
    payload:error
})

export const mobileLoginInitiate = (phoneNumber,providerId,uId) => {
    return async (dispatch)=>{
        dispatch(mobileLoginStart())
        try {
          const mobileLogindata = await mobileLoginApi(phoneNumber,providerId,uId)
          console.log("mobileLogindata",mobileLogindata)
          dispatch(mobileLoginSuccess(mobileLogindata))
  
        } catch (err) {
          console.log("error",err)
          dispatch(mobileLoginError(err))
  
        }
    }
}