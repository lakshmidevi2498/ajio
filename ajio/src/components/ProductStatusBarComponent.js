import * as React from 'react';
import { useState, useEffect } from 'react'; 
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';  
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import {   Typography } from '@mui/material';
import Controls from '../commons/Controls'; 
import { useTheme, useMediaQuery } from '@mui/material';

const ProductStatusBarComponent = ({item ,orderDate }) => {
    console.log("shippingStatus", item) 
    const [orderedDate, setOrderedDate] = useState(null) 
    const [shippedDate, setShippedDate] = useState(null)
    const [outforDate, setOutforDate] = useState(null)
    const [deliveredDate, setDeliveredDate] = useState(null)
    const [cancelDate, setCancelDate] = useState(null)
    const [cancelledReason, setCancelledReason] = useState(null) 
    const [packedDate ,setPackedDate] = useState(null)
    const [arrivingDate ,setArrivingDate] = useState(null)

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        if (item) {
            setOrderedDate(orderDate || null) 
            setShippedDate(item.productShippedDate  || null)
            setOutforDate(item. outfordeliveryDate || null)
            setDeliveredDate(item.productDeliveredDate || null) 
            setCancelledReason(item.productCancelledReason || null)
            setPackedDate(item.productPackedDate || null)
            setArrivingDate (item.productArrivingDate || null)

        }


    }, [item])
    useEffect(() => {
        if (item && item.productCancelledDate) {
            setCancelDate(item.productCancelledDate);
        }
    }, [item]);

 



    const CustomConnector = styled(StepConnector)(({ theme, orientation, index, currentStepIndex }) => ({
      [`&.${stepConnectorClasses.alternativeLabel}`]: {
          ...(orientation === 'vertical'
              ? { left: 'calc(50% - 1px)', marginBottom: 5 ,} 
              : { top: 5, marginLeft: -15, marginRight: -15 }), 
      },
      [`&.${stepConnectorClasses.active}`]: {
          [`& .${stepConnectorClasses.line}`]: {
              borderColor: '#13ed4d',
          },
      },
      [`&.${stepConnectorClasses.completed}`]: {
          [`& .${stepConnectorClasses.line}`]: {
              borderColor: '#13ed4d',
          },
      },
      [`& .${stepConnectorClasses.line}`]: {
          ...(orientation === 'vertical'
              ? { width: 5, height: '50px', marginRight: 'auto', marginLeft:-6} 
              : { height: 3, border: 'none', borderRadius: 1 }),  
          backgroundColor: 'transparent',
          borderTop:
              orientation === 'horizontal'
                  ? index < currentStepIndex
                      ? '2px solid #13ed4d'
                      : '2px solid #eaeaf0'
                  : undefined,
          borderLeft:
              orientation === 'vertical'
                  ? index < currentStepIndex
                      ? '2px solid #13ed4d'
                      : '2px solid #eaeaf0'
                  : undefined,
      },
  }));
  
  
  

      const CustomStepIcon = styled('div')(({ active, completed, index }) => { 
      
        return {
          width: 12,
          height: 12,
          borderRadius: '50%',
          backgroundColor: completed
            ? '#13ed4d'
            : active
            ? '#13ed4d'
            : '#eaeaf0',
          margin: '0 auto',
          position: 'relative', 
        };
      });
  


    const steps = ['Confirmed', 'Packed','Shipped', 'Out-for-delivery', 'Delivered' , 'Arriving'];
    const dates = [orderedDate,  packedDate, shippedDate, outforDate, deliveredDate ,arrivingDate]

    const trackerSteps = [
      {label:"Confirmed", date:orderedDate},
      {label:"Packed", date:packedDate},
      {label:"Shipped", date:shippedDate},
      {label:"Out-for-delivery", date:outforDate},
      {label:"Delivered", date:deliveredDate},
      {label:"Arriving", date:arrivingDate},
    ]

    const steps2 = ['Order Confirmed', ' Order Cancelled'];
    const dates2 = [orderedDate, cancelDate]
    const reason = ["", cancelledReason]

 const displayCancelDate = item?.productCancelledDate || cancelDate;
    console.log("displayCancelDate", displayCancelDate)

    const currentStepIndex = steps.findIndex(step => step === item?.productShippingStatus); 
   

    return (

      <Controls.Grid container direction="column" spacing={2}>
      <Controls.Grid item>
          <Typography 
              variant="caption1" 
              sx={{ 
                  color: theme.palette.one.text2, 
                  fontSize: { xs: "13px", sm: '15px' }, 
                  fontWeight: "medium" 
              }}
          >
              {item.productShippingStatus === "cancelled" && (
                  <>
                      Your order was cancelled by you on{" "}
                      {new Date(displayCancelDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                      })}
                  </>
              )}
          </Typography>
      </Controls.Grid>
  
      <Controls.Grid item xs={12}>
          {!cancelDate && (
              <Stack sx={{ width: '100%' }}>
              <Stepper
                  alternativeLabel={!isSmallScreen}
                  orientation={isSmallScreen ? 'vertical' : 'horizontal'}
                  activeStep={currentStepIndex}
                  connector={
                      <CustomConnector
                          orientation={isSmallScreen ? 'vertical' : 'horizontal'}
                          currentStepIndex={currentStepIndex}
                      />
                  }
              >
                  {trackerSteps.map((step, index) => (
                      <Step key={index}>
                          <StepLabel
                              StepIconComponent={(props) => (
                                  <CustomStepIcon
                                      {...props}
                                      active={index === currentStepIndex}
                                      completed={index < currentStepIndex}
                                      index={index}
                                      sx={{ margin: 0 ,padding:0}} 
                                  />
                              )}
                          >
                              <Typography
                                  variant="caption1"
                                  sx={{
                                      color: 'gray',
                                      fontSize: { xs: '15px', sm: '12px',lg:"16px" },
                                      textAlign: 'left',
                                      display: 'flex',
                                      justifyContent: 'center',  
                                      flexDirection: isSmallScreen ? 'column' : 'column',  
                                  }}
                              >
                                  {step.label} <br/>
                                  {step.date && (
                                      <Typography
                                          variant="caption1"
                                          sx={{
                                              fontSize: { xs: '9px', sm: '16px' },
                                              textAlign: 'left',
                                              color: 'gray',
                                              display: 'block',
                                          }}
                                      >
                                          {step.date !== null
                                              ? new Date(step.date).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                })
                                              : 'Not Available'}
                                      </Typography>
                                  )}
                              </Typography>
                          </StepLabel>
                      </Step>
                  ))}
              </Stepper>
          </Stack>
          )}
      </Controls.Grid>
  </Controls.Grid>
    )
};


export default ProductStatusBarComponent