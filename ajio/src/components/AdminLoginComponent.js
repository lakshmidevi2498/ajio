import React from 'react'
import Controls from '../commons/Controls'
import { useEffect } from 'react';
import { Formik, Form, Field } from 'formik'; 
import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminLoginInitiate } from '../redux/actions/adminLoginAction';
import {useSelector , useDispatch} from 'react-redux' 
import theme from '../utilities/theme';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor:'#EAE2D1', 
    border: `3px solid ${theme.palette.one.text2}`,
    boxShadow: 24,
    p: 4,
    borderRadius:"20px",
    outline:"none"
  };

const AdminLoginComponent = () => {
    const [open, setOpen] = React.useState(false); 
  const dispatch = useDispatch()

  const adminData = useSelector((state)=>state.adminloginreducer.data)
  console.log("adminData",adminData)
  const allowedOrigins = process.env.NODE_ENV === 'production' 
  ? 'https://ajio-2.onrender.com' 
  : 'http://localhost:5050';
 

useEffect(() => {
  const admin = adminData?.data?.admin
 
  const role = admin?.role
  console.log("role",role)
  if (role === "admin") {
        window.location.href = `${allowedOrigins}/adminpanel`;
      }  
     
}, [adminData]);

    const initialValues = {
        email: '', password: "",
      };
    
      const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required("password is required"),
      });
    
      const onSubmit = async (values, actions) => {
        console.log("Form Values:", values);
        actions.resetForm();
        handleClose()
        handleSignin(values)
    
      }
    useEffect(()=>{
        handleOpen()
    })

    const handleSignin = async (user) => {
      console.log("user",user)
      await dispatch(adminLoginInitiate(user))
      
      }
    
   
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
    <Controls.Grid container justifyContent="center">
        <Controls.Grid item>
      <Controls.Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description" 
      >
        <Controls.Box sx={style}>
        <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form>
                  <Controls.Grid container spacing={2}>
                    <Controls.Grid item xs={12} textAlign="center" mb={4}>
                      <Controls.Typography
                        variant="h2"
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: "15px", md: "20px", xl: "25px" },
                          color:theme.palette.one.text2
                        }}
                      >
                        Welcome Admin !!
                      </Controls.Typography>
                    </Controls.Grid>

                    <Controls.Grid item xs={12}>
                      <Field
                        name="email"
                        as={Controls.TextField}
                        label="Email"
                        placeholder="Enter Email"
                        size="small"
                        fullWidth
                        autoComplete="off"
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    </Controls.Grid>

                    <Controls.Grid item xs={12}>
                      <Field
                        name="password"
                        as={Controls.TextField}
                        label="Password"
                        placeholder="Password"
                        size="small"
                        type="password"
                        fullWidth
                        autoComplete="off"
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                      />
                    </Controls.Grid>

                    <Controls.Grid item xs={12} mt={2}>
                      <Controls.Button
                        variant="contained"
                        disabled={isSubmitting}
                        type="submit"
                        sx={{ 
                          textTransform: "initial",
                        }} 
                      >
                        Signin
                      </Controls.Button>
                    </Controls.Grid>

                     
                  </Controls.Grid>
                </Form>
              )}
            </Formik>
        </Controls.Box>
      </Controls.Modal>
        </Controls.Grid>
     </Controls.Grid>   
         </>
  )
}

export default AdminLoginComponent