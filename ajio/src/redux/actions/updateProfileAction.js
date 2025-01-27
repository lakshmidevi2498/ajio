import * as types from './actionTypes'
import { updateProfileApi } from '../apis/updateProfileApi'
import { toast } from 'react-toastify';

export const updateProfileStart= () => ({
type:types.PROFILE_PUT_START
})

export const updateProfileSuccess = (data) => (
    {
    type:types.PROFILE_PUT_SUCCESS,
    payload:data
})

export const updateProfileError = (error) => (
    {
    type:types.PROFILE_PUT_ERROR,
    payload:error
})

export const updateProfileInitiate = (userId,values) => {
    return async (dispatch)=>{
        dispatch(updateProfileStart())
        try {
          const updateProfiledata = await updateProfileApi(userId,values)
          dispatch(updateProfileSuccess(updateProfiledata))
  
        } catch (err) {
          console.log("error",err)
          dispatch(updateProfileError(err))
          toast.error("getting products data failed")
  
        }
    }
}