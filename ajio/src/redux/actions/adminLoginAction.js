import * as types from './actionTypes'
import { adminLoginApi } from '../apis/adminLoginApi'
import { toast } from 'react-toastify';

export const adminLoginStart= () => ({
type:types.ADMIN_LOGIN_START
})

export const adminLoginSuccess = (data) => (
    {
    type:types.ADMIN_LOGIN_SUCCESS,
    payload:data
})

export const adminLoginError = (error) => (
    {
    type:types.ADMIN_LOGIN_ERROR,
    payload:error
})

export const adminLoginInitiate = (user) => {
    return async (dispatch)=>{
        dispatch(adminLoginStart())
        try {
          const adminlogindata = await adminLoginApi(user)
          dispatch(adminLoginSuccess(adminlogindata))
  
        } catch (err) {
          dispatch(adminLoginError(err))
          toast.error("admin & Password authentication failed")
  
        }
    }
}