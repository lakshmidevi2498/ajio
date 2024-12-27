import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import theme from '../utilities/theme';
import Controls from '../commons/Controls';

const LoaderComponent = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
   
      <Controls.Box
        variant="text1"
        component="img"
        src=
        '/assets/images/loader.png'  
        alt="Loading"
        sx={{
          position: 'absolute',   
          zIndex: 1,  
          width: 100,  
          height: 70,  
        }}
      />

   
      <CircularProgress
        size={100}
        thickness={4}
        sx={{
          color: theme.palette.one.bag,
          animationDuration: '1.5s',  
          '& .MuiCircularProgress-circle': {
            strokeLinecap: 'round',  
          },
        }}
      />
    </Box>
  );
};

export default LoaderComponent;
