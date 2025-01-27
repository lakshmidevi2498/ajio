import * as types from './actionTypes'
import { postInvoiceApi } from '../apis/postInvoiceApis'
import { toast } from 'react-toastify';
import { saveAs } from "file-saver";

export const postInvoiceStart= () => ({
type:types.INVOICE_POST_START
})

export const postInvoiceSuccess = (data) => (
    {
    type:types.INVOICE_POST_SUCCESS,
    payload:data
})

export const postInvoiceError = (error) => (
    {
    type:types.INVOICE_POST_ERROR,
    payload:error
})

export const postInvoiceInitiate = (orders) => {
    return async (dispatch)=>{
        dispatch(postInvoiceStart())
        try {
          const postInvoicedata = await postInvoiceApi(orders)
          dispatch(postInvoiceSuccess(postInvoicedata))
          const blob = new Blob([postInvoicedata.data], { type: "application/pdf" });
          if (blob.size === 0) {
              toast.error("Failed to download the invoice. Please try again.");
              return;
          }
          saveAs(blob, "invoice.pdf");
  
        } catch (err) {
          console.log("error",err)
          dispatch(postInvoiceError(err))
          toast.error("getting products data failed")
  
        }
    }
}