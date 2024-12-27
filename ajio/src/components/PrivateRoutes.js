 
import React, { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate()
    useEffect(()=>{
      const token = sessionStorage.getItem("token");
      const googleToken = sessionStorage.getItem("googleToken"); 
      
      if (token === null && googleToken === null) {
          return navigate('/');
      } 
     
    },[])
 

  return children;  
};

export default PrivateRoute;
