import { combineReducers } from "redux";
import { loadProductsDataReducer } from "./loadProductsReducer"; 
import { googleLoginReducer } from "./googleLoginReducer";
import {facebookLoginReducer} from './facebookLoginReducer'
import {mobileLoginReducer} from './mobileLoginReducer' 
import { loadCartReducer } from "./loadCartReducer";
import { deleteCartReducer } from "./deleteCartReducer";
import { postWishlistReducer } from "./postWishlistReducer";
import { loadWishlistReducer } from "./loadWishlistReducer"; 
import { postAddressReducer } from "./postAddressReducer";
import { loadAddresssReducer } from "./loadAddressReducer";
import { loadOrderReducer } from "./loadOrderReducer";
import { loadProfileReducer } from "./loadProfileReducer";
import { updateProfileReducer } from "./updateProfileReducer";
import { updateCartReducer } from "./updateCartReducer";
import { updateAddressReducer } from "./updateAddressReducer";
import { razorpayOrderReducer } from "./razorpayOrderReducer";
import { razorpayOrderValidateReducer } from "./razorpayOrderValidateReducer";
import { deleteOrderReducer } from "./deleteOrderReducer"; 
import {orderPatchReducer} from "./orderPatchReducer" 
import { adminLoginReducer } from "./adminLoginReducer";
import { loadContentReducer } from "./loadContentReducer";

export const rootReducer = combineReducers(
    {
        loadproductsdata:loadProductsDataReducer, 
        googleuserdata:googleLoginReducer,
        facebookuserdata:facebookLoginReducer,
        mobileuserdata:mobileLoginReducer, 
        loadcartproducts:loadCartReducer,
        deletcartproducts:deleteCartReducer,
        updatedCart:updateCartReducer,
        postwishlist:postWishlistReducer,
        loadwishlist:loadWishlistReducer, 
        postAddress:postAddressReducer,
        loadAddress:loadAddresssReducer,
        updateAddress:updateAddressReducer,
        loadOrder:loadOrderReducer,
        loadprofile:loadProfileReducer,
        updateprofile:updateProfileReducer,
        razopayorder:razorpayOrderReducer,
        razorpayordervalidate:razorpayOrderValidateReducer,
        deleteorder:deleteOrderReducer ,
        patchorder:orderPatchReducer,
        loadcontent:loadContentReducer, 
        adminloginreducer:adminLoginReducer, 
  
})