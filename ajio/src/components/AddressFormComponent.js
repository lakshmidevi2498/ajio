import React, { useEffect, useState } from 'react'
import Controls from '../commons/Controls' 
import { useDispatch, useSelector } from 'react-redux' 
import { useFormik } from "formik";
import * as Yup from "yup";
import { getToken, getUserId } from './GlobalFunction'
import theme from '../utilities/theme'
import { postAddressInitiate } from '../redux/actions/postAddressAction'
import { loadAddressInitiate } from '../redux/actions/loadAddressAction'
import { updateAddressInitiate } from '../redux/actions/updateAddressAction'

const AddressFormComponent = ({setShowAddress ,editAddress}) => {
    const [address ,setAddress] = useState(null)
    const [index,setIndex] = useState(null)
    const dispatch = useDispatch()
    const userId = getUserId() 
    useEffect(()=>{
        const edit = sessionStorage.getItem('editAddress')
        setIndex(edit)
       },[index])
        const getAddress = useSelector((state) => state.loadAddress.data || {})
        console.log("getAddress", getAddress)

        const updateAddress = useSelector((state) => state.updateAddress.data)
        console.log("updateAddress", updateAddress)
        useEffect(() => {
            const fetchAddress = async () => {
                await dispatch(loadAddressInitiate(userId))
            }
            fetchAddress()
        }, [])
    
        useEffect(() => {
            const fetchedAddresses = getAddress.data?.userAddress[index]
            setAddress(fetchedAddresses)
            console.log("fetchedAddresses",fetchedAddresses)
        }, [getAddress])


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name:address?.name ||  "",
            mobile:address?.mobile ||  "",
            pincode:address?.pincode ||  "",
            area: address?.area || "",
            building: address?.building || "",
            landmark:address?.landmark ||  "", 
            district: address?.district || "",
            state: address?.state || "", 
            addressType:address?.addressType ||  "",
            terms: address?.terms || false,
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            area: Yup.string().required("Area is required"),
            pincode: Yup.number().required("Pincode is required"),
            building: Yup.string().required("Building is required"),
            mobile: Yup.string()
                .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits")
                .required("Telephone number is required"),
            district: Yup.string().required("District is required"),
            state: Yup.string().required("State is required"),
            addressType: Yup.string().required("Address type is required"),
            
        }),
        onSubmit: async (values, { resetForm }) => {
            console.log("Submitting to DB", values, userId);
          
            try {
           
              const method = index !== null ? "put" : "post";

          
              if (method === "post") { 
                await dispatch(postAddressInitiate(values, userId));
                await dispatch(loadAddressInitiate(userId))
              }
              else{ 
              await  dispatch(updateAddressInitiate(values,editAddress))
                  sessionStorage.removeItem('editAddress')
                  await dispatch(loadAddressInitiate(userId))
              }
          
            
              resetForm();
              setShowAddress(false);
            } catch (error) {
              console.error("Error submitting form:", error);
            }
          },
          
    });
    
    return (
        <>
            <Controls.Grid container justifyContent="center">
                <Controls.Grid item xs={12}>
                    <form onSubmit={formik.handleSubmit}>
                        <Controls.Grid item px={{ xs: 1, lg: 0 }} py={{ xs: 2, sm: 0 }}>

                            <Controls.Grid item xs={12} mb={2}>

                                <Controls.TextField
                                    id="name"
                                    type="text"
                                    variant="standard"
                                    fullWidth
                                    name="name"
                                    label="Name *"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <div style={{ color: "red", fontSize: "10px" }}>{formik.errors.name}</div>
                                )}
                            </Controls.Grid>


                            <Controls.Grid item xs={12} mb={2}>

                                <Controls.TextField
                                    id="mobile"
                                    type="text"
                                    variant="standard"
                                    fullWidth
                                    name="mobile"
                                    label="Mobile *"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.mobile}
                                />
                                {formik.touched.mobile && formik.errors.mobile && (
                                    <div style={{ color: "red", fontSize: "10px" }}>{formik.errors.mobile}</div>
                                )}
                            </Controls.Grid>


                            <Controls.Grid item xs={12} mb={2}>
                                <Controls.TextField
                                    id="pincode"
                                    type="text"
                                    variant="standard"
                                    fullWidth
                                    name="pincode"
                                    label="Pin Code *"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.pincode}
                                />
                                {formik.touched.pincode && formik.errors.pincode && (
                                    <div style={{ color: "red", fontSize: "10px" }}>{formik.errors.pincode}</div>
                                )}
                            </Controls.Grid> 
                            <Controls.Grid item xs={12} mb={2}>

                                <Controls.TextField
                                    id="area"
                                    type="area"
                                    variant="standard"
                                    fullWidth
                                    name="area"
                                    label="Locality /Area/Street *"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.area}
                                />
                                {formik.touched.area && formik.errors.area && (
                                    <div style={{ color: "red", fontSize: "10px" }}>{formik.errors.area}</div>
                                )}
                            </Controls.Grid>


                            <Controls.Grid item xs={12} mb={2}>

                                <Controls.TextField
                                    id="building"
                                    type="building"
                                    variant="standard"
                                    fullWidth
                                    name="building"
                                    label="Flat Number / Building Name *"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.building}

                                />
                                {formik.touched.building && formik.errors.building && (
                                    <div style={{ color: "red", fontSize: "10px" }}>{formik.errors.building}</div>
                                )}
                            </Controls.Grid>

                            <Controls.Grid item xs={12} mb={2}>

                                <Controls.TextField
                                    id="landmark"
                                    type="landmark"
                                    variant="standard"
                                    fullWidth
                                    name="landmark"
                                    label="Landmark "
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.landmark}

                                />
                                {formik.touched.landmark && formik.errors.landmark && (
                                    <div style={{ color: "red", fontSize: "10px" }}>{formik.errors.landmark}</div>
                                )}
                            </Controls.Grid>

                            <Controls.Grid item xs={12} mb={2}>
                                <Controls.TextField
                                    id="district"
                                    type="text"
                                    variant="standard"
                                    fullWidth
                                    name="district"
                                    label="District *"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.district}
                                />
                                {formik.touched.district && formik.errors.district && (
                                    <div style={{ color: "red", fontSize: "10px" }}>{formik.errors.district}</div>
                                )}
                            </Controls.Grid>
                            <Controls.Grid item xs={12} mb={2}>
                                <Controls.TextField
                                    id="state"
                                    type="text"
                                    variant="standard"
                                    fullWidth
                                    name="state"
                                    label="State *"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.state}
                                />
                                {formik.touched.state && formik.errors.state && (
                                    <div style={{ color: "red", fontSize: "10px" }}>{formik.errors.state}</div>
                                )}
                            </Controls.Grid>



                            <Controls.Grid item sx={{ display: "flex" }}>
                                <Controls.FormControl>
                                    <Controls.FormLabel
                                        id="address-type-label"
                                        sx={{ marginRight: 2, fontSize: "12px" }}
                                    >
                                        Address Type
                                    </Controls.FormLabel>
                                    <Controls.RadioGroup
                                        aria-labelledby="address-type-label"
                                        name="addressType"  
                                        value={formik.values.addressType}  
                                        onChange={formik.handleChange} 
                                        row
                                    >
                                        <Controls.FormControlLabel
                                            value="Home"
                                            control={
                                                <Controls.Radio
                                                    sx={{
                                                        "& .MuiSvgIcon-root": { color: "#866528", fontSize: "medium" },
                                                    }}
                                                />
                                            }
                                            label="Home"
                                        />
                                        <Controls.FormControlLabel
                                            value="Work"
                                            control={
                                                <Controls.Radio
                                                    sx={{
                                                        "& .MuiSvgIcon-root": { color: "#866528", fontSize: "medium" },
                                                    }}
                                                />
                                            }
                                            label="Work"
                                        />
                                        <Controls.FormControlLabel
                                            value="Others"
                                            control={
                                                <Controls.Radio
                                                    sx={{
                                                        "& .MuiSvgIcon-root": { color: "#866528", fontSize: "medium" },
                                                    }}
                                                />
                                            }
                                            label="Others"
                                        />
                                    </Controls.RadioGroup>
                                    {formik.touched.addressType && formik.errors.addressType && (
                                        <div style={{ color: "red", fontSize: "10px" }}>
                                            {formik.errors.addressType}
                                        </div>
                                    )}
                                </Controls.FormControl>
                            </Controls.Grid>


                            <Controls.Grid item sx={{ display: "flex", alignItems: "center" }}>
                                <Controls.Checkbox
                                    name="terms"
                                    checked={formik.values.terms}  
                                    onChange={formik.handleChange} 
                                    color="primary"
                                />
                                <Controls.Typography sx={{ fontSize: "12px", marginLeft: 0 }}>
                                   Make as default Address.
                                </Controls.Typography>
                               
                            </Controls.Grid>
                            {formik.touched.terms && formik.errors.terms && (
                                    <div style={{ color: "red", fontSize: "10px", marginLeft: "16px" }}>
                                        {formik.errors.terms}
                                    </div>
                                )} 
                            <Controls.Grid item sx={{ display: "flex", justifyContent: "center" }} xs={12} mt={6}>
  
  <Controls.Button
    type="button"
    variant="outlined"
    sx={{
      color: theme.palette.one.text2,
      border: `1px solid ${theme.palette.one.text2}`,
      paddingX: { xs: "78px", md: "100px" },
      paddingY: 2,
    }}
    onClick={() => formik.resetForm()}
  >
    RESET
  </Controls.Button>

 
  {index !== null ? (
    <Controls.Button
      type="submit"
      variant="contained"
      sx={{
        color: "white",
        backgroundColor: formik.isSubmitting ? "gray" : "#866528",
        paddingX: { xs: "78px", md: "100px" },
        paddingY: 2,
      }}
      disabled={formik.isSubmitting}
    >
      {formik.isSubmitting ? "Submitting..." : "UPDATE"}
    </Controls.Button>
  ) : (
    <Controls.Button
      type="submit"
      variant="contained"
      sx={{
        color: "white",
        backgroundColor: formik.isSubmitting ? "gray" : "#866528",
        paddingX: { xs: "78px", md: "100px" },
        paddingY: 2,
      }}
      disabled={formik.isSubmitting}
    >
      {formik.isSubmitting ? "Submitting..." : "SAVE"}
    </Controls.Button>
  )}
</Controls.Grid>

                        </Controls.Grid>
                    </form>
                </Controls.Grid>
            </Controls.Grid>
        </>
    )
}

export default AddressFormComponent