import * as types from './actionTypes'
import { loadProductsDataApi } from '../apis/loadProductsApi';
// import { toast } from 'react-toastify';

export const loadProductsDataStart= () => ({
type:types.LOAD_PRODUCTS_DATA_START
})

export const loadProductsDataSuccess = (data) => (
    {
    type:types.LOAD_PRODUCTS_DATA_SUCCESS,
    payload:data
})

export const loadProductsDataError = (error) => (
    {
    type:types.LOAD_PRODUCTS_DATA_ERROR,
    payload:error
})

export const loadProductsDataInitiate = () => {
    return async (dispatch)=>{
        dispatch(loadProductsDataStart())
        try {
          const loadProductsDatadata = await loadProductsDataApi()
          dispatch(loadProductsDataSuccess(loadProductsDatadata))
  
        } catch (err) {
          console.log("error",err)
          dispatch(loadProductsDataError(err))
  
        }
    }
}