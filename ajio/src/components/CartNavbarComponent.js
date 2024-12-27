import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel'; 
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import {   Typography } from '@mui/material';
import Controls from '../commons/Controls';
import { useNavigate } from 'react-router-dom';


const CartNavbarComponent = ({count}) => {
    const navigate = useNavigate()

    const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
        [`&.${stepConnectorClasses.alternativeLabel}`]: {
            top: 10,
            marginLeft: -15,
      marginRight:-15,
            [theme.breakpoints.up('md')]: {
                top: 12,
            },
        },
        [`&.${stepConnectorClasses.active}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                backgroundColor: 'black', 
            },
        },
        [`&.${stepConnectorClasses.completed}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                backgroundColor: '#eaeaf0', 
            },
        },
        [`& .${stepConnectorClasses.line}`]: {
            height: 3,
            border: 0,
            borderRadius: 1, 
            backgroundColor: "#eaeaf0",  
        },
    }));


    const handleNavigation = (stepIndex) => {
        const routes = ['/cart', '/shipping', '/payment']; 
        navigate(routes[stepIndex]);
    };


    function ColorlibStepIcon(props) {
        const { active, completed, icon } = props;


   
        const icons = {
            1: (
                <Controls.ShoppingBagOutlinedIcon
                    sx={{ fontSize: { xs: 15, sm: 15 } }}
                    onClick={() => handleNavigation(0)} 
                />
            ),
            2: (
                <Controls.LocationOnOutlinedIcon
                    sx={{ fontSize: { xs: 15, sm: 15 } }}
                    onClick={() => handleNavigation(1)}
                />
            ),
            3: (
                <Controls.CurrencyRupeeIcon
                    sx={{ fontSize: { xs: 15, sm: 15 } }}
                    onClick={() => handleNavigation(2)}  
                />
            ),
        };
        const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
            backgroundColor: ownerState.active? 'black':"#ededed",
            zIndex: 1,
            color: '#fff',
            display: 'flex',
            borderRadius: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: ownerState.active ? '0 4px 10px 0 rgba(0,0,0,.25)' : 'none',
            width: '20px', 
            height: '20px' ,
            fontSize: '16px',
            margin: 0,  
    padding: 0,
            [theme.breakpoints.up('sm')]: {
                width: '20px',
                height: '20px',  
            },
            [theme.breakpoints.up('md')]: {
                width: '25px',  
                height: '25px' 
            },
        }));
        


      


        return (
            <ColorlibStepIconRoot ownerState={{ completed, active }}>
                {icons[String(icon)]}
            </ColorlibStepIconRoot>
        );
    }


    ColorlibStepIcon.propTypes = {
        /**
         * Whether this step is active.
         * @default false
         */
        active: PropTypes.bool,
        className: PropTypes.string,
        /**
         * Mark the step as completed. Is passed to child components.
         * @default false
         */
        completed: PropTypes.bool,
        /**
         * The label displayed in the step icon.
         */
        icon: PropTypes.node,
    };
  

    const steps2 = ['Bag', ' Delivery Details' , 'Payment'];
   

    return (
        <Controls.Grid container direction="column" >
         

            <Controls.Grid item xs={12}>
                
                        <Stack sx={{ width: '100%', }}>
                            <Stepper alternativeLabel activeStep={count} connector={<ColorlibConnector />}>
                                {steps2.map((label, index) => (
                                    <Step key={label}>
                                        <StepLabel
                                            StepIconComponent={(props) => (
                                                <ColorlibStepIcon
                                                    {...props}
                                                    active={index === count}  
                                                    completed={index < 1}
                                                />
                                            )}
                                        >
                                            {(
                                                <Typography
                                                    variant="caption1"
                                                    sx={{ color: index === 0 ? 'black' : 'gray', fontSize: { xs: "10px", sm: "14px" },margin: 0, 
                                                    padding: 0,}}
                                                >
                                                    {label}
                                                </Typography>
                                            )
                                            }
                                          
                                        </StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Stack>
                   
            </Controls.Grid>
        </Controls.Grid>
    );
};

export default CartNavbarComponent;