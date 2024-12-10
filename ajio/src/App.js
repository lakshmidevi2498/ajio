import logo from './logo.svg';
import './App.css';
import FlashPage from './pages/FlashPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoriesPage from './pages/CategoriesPage';
import { Provider } from 'react-redux';
import store from './redux/store';  
import InnerProductsPage from './pages/InnerProductsPage';
import OtpComponent from './components/OtpComponent';
import ProfileComponent from './components/ProfileComponent';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FlashPage />} />
          <Route path="/categories/:categoryId/:subcategoryId" element={<CategoriesPage />} />
          <Route path="/innerproducts" element={<InnerProductsPage />} />
          <Route path ='/otp_verification' element={<OtpComponent/>}/>
          <Route path = '/profile' element={<ProfileComponent/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
