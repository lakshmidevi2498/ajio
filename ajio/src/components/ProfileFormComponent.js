import React from 'react'
import Controls from '../commons/Controls' 

const ProfileFormComponent = ({formik}) => {
  return (
    <>
     <form onSubmit={formik.handleSubmit}>
                        <Controls.Grid item px={{xs:1   ,lg:20}} py={{xs:2,sm:5}}>
                           
                            <Controls.Grid item xs={12} mb={2}>
                                <Controls.Typography variant="caption1" sx={{ fontSize: "12px" }}>
                                    First name *
                                </Controls.Typography>
                                <Controls.TextField
                                    id="fname"
                                    type="text"
                                    variant="standard"
                                    fullWidth
                                    name="fname"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.fname}
                                />
                                {formik.touched.fname && formik.errors.fname && (
                                    <div style={{ color: "red", fontSize: "10px" }}>{formik.errors.fname}</div>
                                )}
                            </Controls.Grid>
 
                            <Controls.Grid item xs={12} mb={2}>
                                <Controls.Typography variant="caption1" sx={{ fontSize: "12px" }}>
                                    Last name *
                                </Controls.Typography>
                                <Controls.TextField
                                    id="lname"
                                    type="text"
                                    variant="standard"
                                    fullWidth
                                    name="lname"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.lname}
                                />
                                {formik.touched.lname && formik.errors.lname && (
                                    <div style={{ color: "red", fontSize: "10px" }}>{formik.errors.lname}</div>
                                )}
                            </Controls.Grid>
 
                            <Controls.Grid item xs={12} mb={2}>
                                <Controls.Typography variant="caption1" sx={{ fontSize: "12px" }}>
                                    Screen Name *
                                </Controls.Typography>
                                <Controls.TextField
                                    id="sname"
                                    type="text"
                                    variant="standard"
                                    fullWidth
                                    name="sname"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.sname}
                                />
                                {formik.touched.sname && formik.errors.sname && (
                                    <div style={{ color: "red", fontSize: "10px" }}>{formik.errors.sname}</div>
                                )}
                            </Controls.Grid>
 
                            <Controls.Grid item xs={12} mb={2}>
                                <Controls.Typography variant="caption1" sx={{ fontSize: "12px" }}>
                                    Email Address *
                                </Controls.Typography>
                                <Controls.TextField
                                    id="email"
                                    type="email"
                                    variant="standard"
                                    fullWidth
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <div style={{ color: "red", fontSize: "10px" }}>{formik.errors.email}</div>
                                )}
                            </Controls.Grid>


                            <Controls.Grid item xs={12} mb={2}>
                                <Controls.Typography variant="caption1" sx={{ fontSize: "12px" }}>
                                    Date of Birth *
                                </Controls.Typography>
                                <Controls.TextField
                                    id="dob"
                                    type="date"
                                    variant="standard"
                                    fullWidth
                                    name="dob"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.dob}
                                    InputLabelProps={{
                                        shrink: true,
                                        style: { fontFamily: "SourceSansPro" },
                                    }}
                                    inputProps={{
                                        max: new Date().toISOString().split("T")[0] 
                                    }}
                                />
                                {formik.touched.dob && formik.errors.dob && (
                                    <div style={{ color: "red", fontSize: "10px" }}>{formik.errors.dob}</div>
                                )}
                            </Controls.Grid>

                            <Controls.Grid item sx={{ display: "flex" }}>
                                <Controls.FormControl sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                    <Controls.FormLabel
                                        id="demo-radio-buttons-group-label"
                                        sx={{ marginRight: 2 }}

                                        value={formik.values.gender}
                                        onChange={formik.handleChange}
                                    >
                                        Gender
                                    </Controls.FormLabel>
                                    <Controls.RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                        row
                                    >
                                        <Controls.FormControlLabel value="female" sx={{ fontSize: "10px" }} control={<Controls.Radio sx={{ '& .MuiSvgIcon-root': { color: "#866528", fontSize: "medium" }, }} />} label="Female" />
                                        <Controls.FormControlLabel value="male" control={<Controls.Radio sx={{ '& .MuiSvgIcon-root': { color: "#866528", fontSize: "medium" } }} />} label="Male" />
                                    </Controls.RadioGroup>
                                </Controls.FormControl>
                            </Controls.Grid>
 
                            <Controls.Grid item xs={12} mb={2}>
                                <Controls.Typography variant="caption1" sx={{ fontSize: "12px" }}>
                                    Telephone +91 *
                                </Controls.Typography>
                                <Controls.TextField
                                    id="number"
                                    type="text"
                                    variant="standard"
                                    fullWidth
                                    name="number"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.number}
                                />
                                {formik.touched.number && formik.errors.number && (
                                    <div style={{ color: "red", fontSize: "10px" }}>{formik.errors.number}</div>
                                )}
                            </Controls.Grid>

                            <Controls.Grid item sx={{ display: "flex", justifyContent: "center" }} gap={2} xs={12}>
                                <Controls.Button
                                    type="button"
                                    variant="contained"
                                    sx={{ color: "black", backgroundColor: "lightgray", paddingX: "60px", paddingY: 1 }}
                                    onClick={() => formik.resetForm()}
                                >
                                    RESTORE
                                </Controls.Button>
                                <Controls.Button
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        color: "white",
                                        backgroundColor: formik.isSubmitting ? "gray" : "#866528",
                                        paddingX: "60px",
                                        paddingY: 1,
                                    }}
                                    disabled={formik.isSubmitting} 
                                >
                                    {formik.isSubmitting ? "Submitting..." : "UPDATE"}
                                </Controls.Button>

                            </Controls.Grid>
                        </Controls.Grid>
                    </form>
    </>
  )
}

export default ProfileFormComponent