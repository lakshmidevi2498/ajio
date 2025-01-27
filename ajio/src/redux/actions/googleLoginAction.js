 
import * as types from "./actionTypes";
import {googleLoginApi} from '../apis/googleLoginApi'
export const googleLoginStart = () => ({
  type: types.GOOGLE_LOGIN_START,
});

export const googleLoginSuccess = (data) => (
  {
  
  type: types.GOOGLE_LOGIN_SUCCESS,
  payload: data,
});

export const googleLoginError = (error) => (
  {
  type: types.GOOGLE_LOGIN_ERROR,
  payload: error,
});

export const googleLoginInitiate = (navigate) => {
 
  return async (dispatch)=> {
    dispatch(googleLoginStart())
    try{
     const userData = await googleLoginApi()
     console.log("userData",userData)
     dispatch(googleLoginSuccess(userData))
    }
    catch(error){
     dispatch(googleLoginError(error.mesage))
    }
  }
}
