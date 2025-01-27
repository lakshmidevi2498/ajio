import * as types from './actionTypes'
import { updateAddressApi } from '../apis/updateAddressApi.js'
import { toast } from 'react-toastify';

export const updateAddressStart= () => ({
type:types.ADDRESS_PUT_START
})

export const updateAddressSuccess = (data) => (
    {
    type:types.ADDRESS_PUT_SUCCESS,
    payload:data
})

export const updateAddressError = (error) => (
    {
    type:types.ADDRESS_PUT_ERROR,
    payload:error
})

export const updateAddressInitiate = (values,editAddress) => {
    return async (dispatch)=>{
        dispatch(updateAddressStart())
        try {
          const updateAddressdata = await updateAddressApi(values,editAddress)
          dispatch(updateAddressSuccess(updateAddressdata))
  
        } catch (err) {
          console.log("error",err)
          dispatch(updateAddressError(err))
          toast.error("getting products data failed")
  
        }
    }
}