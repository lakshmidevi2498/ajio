import { combineReducers } from "redux";
import { loadProductsDataReducer } from "./loadProductsReducer";

// import { loadProductsDataReducer } from "./loadProductsDataReducer";
// import { emailLoginReducer } from "./emailLoginReducer";
// import { emailSignupReducer } from "./emailSignupReducer";
import { googleLoginReducer } from "./googleLoginReducer";
import {facebookLoginReducer} from './facebookLoginReducer'
import {mobileLoginReducer} from './mobileLoginReducer'
// import { postCartReducer } from "./postCartReducer";
import { loadCartReducer } from "./loadCartReducer";
import { deleteCartReducer } from "./deleteCartReducer";
import { postWishlistReducer } from "./postWishlistReducer";
import { loadWishlistReducer } from "./loadWishlistReducer";
// import { deleteWishlistReducer } from "./deleteWishlistReducer";
// import { postCheckoutReducer } from "./postCheckoutReducer";
// import { loadCheckoutReducer } from "./loadCheckoutReducer";
// import { deleteCheckoutReducer } from "./deleteCheckoutReducer";
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
// import { saveSubscriptionReducer } from "./saveSubscriptionReducer";
// import { sendNotificationReducer } from "./sendNotificationReducer";
import { adminLoginReducer } from "./adminLoginReducer";
import { loadContentReducer } from "./loadContentReducer";

export const rootReducer = combineReducers(
    {
        loadproductsdata:loadProductsDataReducer,
        // loadusersdata:emailLoginReducer,
        // postuserdata:emailSignupReducer,
        googleuserdata:googleLoginReducer,
        facebookuserdata:facebookLoginReducer,
        mobileuserdata:mobileLoginReducer,
        // postcartproducts:postCartReducer,
        loadcartproducts:loadCartReducer,
        deletcartproducts:deleteCartReducer,
        updatedCart:updateCartReducer,
        postwishlist:postWishlistReducer,
        loadwishlist:loadWishlistReducer,
        // deletewishlist:deleteWishlistReducer,
        // postcheckout:postCheckoutReducer,
        // loadcheckout:loadCheckoutReducer,
        // deletecheckout:deleteCheckoutReducer,
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
        // savesubscription:saveSubscriptionReducer,
        // sendnotification:sendNotificationReducer,
        adminloginreducer:adminLoginReducer, 
  
})