import * as types from './actionTypes'
import { loadContentApi } from '../apis/loadContentApi.js'
import { toast } from 'react-toastify';

export const loadContentStart= () => ({
type:types.CONTENT_LOAD_START
})

export const loadContentSuccess = (data) => (
    {
    type:types.CONTENT_LOAD_SUCCESS,
    payload:data
})

export const loadContentError = (error) => (
    {
    type:types.CONTENT_LOAD_ERROR,
    payload:error
})

export const loadContentInitiate = () => {
    return async (dispatch)=>{
        dispatch(loadContentStart())
        try {
          const loadContentdata = await loadContentApi()
          dispatch(loadContentSuccess(loadContentdata))
  
        } catch (err) {
          console.log("error",err)
          dispatch(loadContentError(err))
          toast.error("getting products data failed")
  
        }
    }
}