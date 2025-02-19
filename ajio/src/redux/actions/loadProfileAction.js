import * as types from './actionTypes'
import { loadProfileApi } from '../apis/loadProfileApi'
import { toast } from 'react-toastify';

export const loadProfileStart= () => ({
type:types.PROFILE_LOAD_START
})

export const loadProfileSuccess = (data) => (
    {
    type:types.PROFILE_LOAD_SUCCESS,
    payload:data
})

export const loadProfileError = (error) => (
    {
    type:types.PROFILE_LOAD_ERROR,
    payload:error
})

export const loadProfileInitiate = (userId,token) => {
    return async (dispatch)=>{
        dispatch(loadProfileStart())
        try {
          const loadProfiledata = await loadProfileApi(userId,token)
            dispatch(loadProfileSuccess(loadProfiledata))
  
        } catch (err) {
          console.log("error",err)
          dispatch(loadProfileError(err))
          toast.error("getting products data failed")
  
        }
    }
}