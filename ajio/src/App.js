import './App.css';
import FlashPage from './pages/FlashPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoriesPage from './pages/CategoriesPage';
import { Provider } from 'react-redux';
import store from './redux/store';  
import InnerProductsPage from './pages/InnerProductsPage';
import OtpComponent from './components/OtpComponent';
import ProfileComponent from './components/ProfileComponent';
import ProfilePage from './pages/ProfilePage';
import MyOrdersComponent from './components/MyOrdersComponent';
import MyProfileDetailsComponent from './components/MyProfileDetailsComponent';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './utilities/theme';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import ShippingPage from './pages/ShippingPage';
import PaymentPage from './pages/PaymentPage';
import OrderDetailsPage from './pages/OrderDetailsPage';
import AdminLoginComponent from './components/AdminLoginComponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from './components/AppRoutes';


function App() {
  return (
    
    <Provider store={store}>
      <ToastContainer />
      <ThemeProvider theme={theme}>
      <BrowserRouter>
      <CssBaseline />
      <AppRoutes/>
        {/* <Routes>
          <Route path='/' element={<FlashPage />} />
          <Route path="/categories/:categoryId/:subcategoryId" element={<CategoriesPage />} />
          <Route path="/innerproducts" element={<InnerProductsPage />} />
          <Route path ='/otp_verification' element={<OtpComponent/>}/>
          <Route path="/my-account" element={<ProfilePage />}>
                    <Route path="update-profile" element={<MyProfileDetailsComponent  view="update-profile" />} />
                    <Route path="orders" element={<MyOrdersComponent  view="orders"/>} />
                    
            </Route>
            <Route path="/cart" element={<CartPage/>} />
            <Route path ='/wishlist' element={<WishlistPage/>}/>
            <Route path ='/shipping' element={<ShippingPage/>}/>
            <Route path ='/payment' element={<PaymentPage/>}/>
            <Route path ='/orderdetails' element={<OrderDetailsPage/>}/>
            <Route path ='/admin' element={<AdminLoginComponent/>}/>
        </Routes> */}
      </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
