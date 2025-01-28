import React, { Suspense, lazy, useState, useEffect } from 'react'; 
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import LoaderComponent from './LoaderComponent';
import PrivateRoute from './PrivateRoutes';
import CancelRequestComponent from './CancelRequestComponent';

const FlashPage = lazy(() => import('../pages/FlashPage'));
const CategoriesPage = lazy(() => import('../pages/CategoriesPage'));
const InnerProductsPage = lazy(() => import('../pages/InnerProductsPage'));
const OtpComponent = lazy(() => import('./OtpComponent'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));
const MyOrdersComponent = lazy(() => import('./MyOrdersComponent'));
const MyProfileDetailsComponent = lazy(() => import('./MyProfileDetailsComponent'));
const WishlistPage = lazy(() => import('../pages/WishlistPage'));
const ShippingPage = lazy(() => import('../pages/ShippingPage'));
const PaymentPage = lazy(() => import('../pages/PaymentPage'));
const OrderDetailsPage = lazy(() => import('../pages/OrderDetailsPage'));
const AdminLoginComponent = lazy(() => import('./AdminLoginComponent'));
const CartPage = lazy(() => import('../pages/CartPage'));

const AppRoutes = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 100);
    }, []);
  
    return (
      <>
        {loading ? (
            <LoaderComponent />
        ) : (
            <Suspense fallback={<LoaderComponent />}>
                <Routes>
                    <Route path='/' element={<FlashPage />} />
                    <Route path="/categories/:categoryId/:subcategoryId" element={<CategoriesPage />} />
                    <Route path="/innerproducts" element={<InnerProductsPage />} />
                    <Route path='/otp_verification' element={<OtpComponent />} />
                    <Route path='/admin' element={<AdminLoginComponent />} />
  
                    {/* Private routes */}
                    <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
                    <Route path='/wishlist' element={<PrivateRoute><WishlistPage /></PrivateRoute>} />
                    <Route path='/shipping' element={<PrivateRoute><ShippingPage /></PrivateRoute>} />
                    <Route path='/payment' element={<PrivateRoute><PaymentPage /></PrivateRoute>} />
                    <Route path='/orderdetails' element={<PrivateRoute><OrderDetailsPage /></PrivateRoute>} />
                    <Route path="/my-account" element={<PrivateRoute><ProfilePage /></PrivateRoute>}>
                        <Route path="update-profile" element={<PrivateRoute><MyProfileDetailsComponent view="update-profile" /></PrivateRoute>} />
                        <Route path="orders" element={<PrivateRoute><MyOrdersComponent view="orders" /></PrivateRoute>} />       
                    </Route>
                    <Route path ='/cancelrequest' element={<PrivateRoute><CancelRequestComponent/></PrivateRoute>}/>
                </Routes>
            </Suspense>
        )}
      </>
    );
}

export default AppRoutes;
