import './App.css'; 
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import store from './redux/store';   
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './utilities/theme'; 
import { ToastContainer } from 'react-toastify';
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
      </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
