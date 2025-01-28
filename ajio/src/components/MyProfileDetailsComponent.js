import React, { useEffect, useState } from 'react'
import Controls from '../commons/Controls' 
import { useDispatch, useSelector } from 'react-redux'
import { loadProfileInitiate } from '../redux/actions/loadProfileAction'
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateProfileInitiate } from '../redux/actions/updateProfileAction'
import { getToken, getUserId } from './GlobalFunction'
import ProfileFormComponent from './ProfileFormComponent';

const MyProfileDetailsComponent = () => {
    const dispatch = useDispatch()
    const userData = useSelector((state) => state.loadprofile.data)
    console.log("userData", userData)
    const updatedUser = useSelector((state)=>state.updateprofile.data || {})
    console.log("updatedUser", updatedUser)
    const userId = getUserId()
    const token = getToken()


    useEffect(() => {

        if(userId){
        dispatch(loadProfileInitiate(userId,token))
        }
     
    },[userId,token,dispatch]);
    const [details, setDetails] = useState({
        fname: "",
        lname: "",
        sname: "",
        email: "",
        dob: "",
        gender: "",
        number: "",
      });
    
     
      useEffect(() => {
        const User = userData?.data?.user;
        if (User) {
          let firstName = "";
          let lastName = "";
      
          if (User.fname && User.lname) {
            firstName = User.fname;
            lastName = User.lname;
          } else if (User.name) {
            [firstName, lastName] = User.name.split(" ");
          }
      // if(User.phoneNumber){
      //   // number=User.phoneNumber
      // }
          setDetails((prevDetails) => ({
            ...prevDetails,
            fname: firstName || "",
            lname: lastName || "",
            email: User.email || "",
            dob: User.dob || "",
            number: User.number || User.phoneNumber || "",
            sname: User.sname || "",
            gender: User.gender || "",
          }));
        }
      }, [userData]);
      
    

      const formik = useFormik({
        enableReinitialize: true, 
        initialValues: {
          fname: details.fname || "",
          lname: details.lname || "",
          sname: details.sname || "",
          email: details.email || "",
          dob: details.dob || "",
          gender: details.gender || "",
          number: details.number || details.phoneNumber || "",
        },
        validationSchema: Yup.object({
          fname: Yup.string().required("First name is required"),
          lname: Yup.string().required("Last name is required"),
          email: Yup.string().email("Invalid email address").required("Email is required"),
          dob: Yup.date().required("Date of birth is required"),
          number: Yup.string()
            .matches(/^\d{10}$/, "Telephone number must be exactly 10 digits")
            .required("Telephone number is required"),
        }),
        onSubmit: async (values ,{resetForm}) => {
          console.log("Submitting to DB", values ,userId);
          resetForm()
          dispatch(updateProfileInitiate(userId,values)) 
          await dispatch(loadProfileInitiate(userId,token))
          
        },
      });

    return (
        <>
            <Controls.Grid container justifyContent="center" mt={{xs:5,sm:0}}>
                <Controls.Grid item xs={12} sx={{ backgroundColor: "white", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", height: "auto" }} p={{xs:2}}>
                    <Controls.Grid item sx={{ textAlign: "center" }}>
                        <Controls.Typography variant='caption1' sx={{ fontSize: {xs:"25px",sm:"35px"}, color: "#333333" }}>Personal Information</Controls.Typography>
                    </Controls.Grid>
                    <Controls.Grid item sx={{ textAlign: "center" }}>
                        <Controls.Typography variant='caption1' sx={{ fontSize: {xs:"12px",sm:"14px"}, color: "#333333" }}>Hey there! Fill in your details for a personalized AJIO shopping experience.</Controls.Typography>
                    </Controls.Grid>


                   <ProfileFormComponent formik={formik}/>

                </Controls.Grid>
            </Controls.Grid>
        </>
    )
}

export default MyProfileDetailsComponent