import React from 'react'
import Controls from '../commons/Controls'
import theme from '../utilities/theme'
import CheckIcon from '@mui/icons-material/Check';

const ShowAddressComponentOne = ({handleEditAddress,handleSelected,handleAddAddress,select,  address,addressIndex,handleClose}) => {
  return (
    <>
     <Controls.Grid item xs={12}>
                                <Controls.Grid py={1}
                                    item
                                    xs={12}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        alignItems: "center",
                                    }}
                                >
                                    <Controls.CloseIcon sx={{ fontSize: "18px" }} onClick={handleClose} />
                                </Controls.Grid>
                                <Controls.Grid item sx={{ display: "flex", justifyContent: "space-between" }} gap={{ xs: 1, sm: 10 }} mb={2} px={2}>
                                    <Controls.Grid item >
                                        <Controls.Grid item sx={{ display: "flex" }} gap={1}>
                                            <Controls.LocationOnOutlinedIcon />
                                            <Controls.Typography variant='caption1' sx={{ fontWeight: "bold" }}>Change Address</Controls.Typography>
                                        </Controls.Grid>
                                    </Controls.Grid>
                                    <Controls.Grid item sx={{ cursor: "pointer" }} onClick={handleAddAddress}>
                                        <Controls.Typography variant='caption1' sx={{ color: theme.palette.one.text }}>Add New Address</Controls.Typography>
                                    </Controls.Grid>
                                </Controls.Grid>

                                {address?.map((item, index) => (
                                    <Controls.Grid item sx={{ backgroundColor: select === index ? "#FFF8EB" : "white", display: "flex", justifyContent: "space-between", cursor: "pointer" }} xs={12} key={index} >

                                        {console.log("indexx", addressIndex, "and", index)}
                                        <Controls.Grid item onClick={() => handleSelected(index,item._id)}>
                                            <Controls.Grid item p={{ xs: 1, sm: 5 }} >
                                                <Controls.Grid item>
                                                    <Controls.Typography variant='caption1' sx={{ fontWeight: "bold", fontSize: "15px" }}>{item.name}</Controls.Typography>&nbsp;&nbsp;
                                                    <Controls.Typography variant='caption1' sx={{ border: "1px solid black", borderRadius: 1, fontSize: "12px", padding: 0.5 }}>{item.addressType}</Controls.Typography>
                                                </Controls.Grid>
                                                <Controls.Grid item>
                                                    <Controls.Typography variant='caption1' sx={{ fontWeight: "bold", color: theme.palette.one.text2, fontSize: "12px" }}>{item.terms === true ? "Default" : ""}</Controls.Typography>
                                                </Controls.Grid>
                                                <Controls.Grid item>
                                                    <Controls.Typography variant='caption1' sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>{item.area},&nbsp;{item.building}</Controls.Typography>
                                                </Controls.Grid>
                                                {item.landmark &&
                                                    <Controls.Grid item>
                                                        <Controls.Typography variant='caption1' sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>{item.landmark}</Controls.Typography>
                                                    </Controls.Grid>}
                                                <Controls.Grid item>
                                                    <Controls.Typography variant='caption1' sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>{item.district},&nbsp;{item.state}</Controls.Typography>
                                                </Controls.Grid>


                                                <Controls.Grid item>
                                                    <Controls.Typography variant='caption1' sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>India-{item.pincode}</Controls.Typography>
                                                </Controls.Grid>
                                                <Controls.Grid item>
                                                    <Controls.Typography variant='caption1' sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>Phone :</Controls.Typography>
                                                    <Controls.Typography variant='caption1' sx={{ fontWeight: "bold", color: '#6d6d6d', fontSize: "14px", fontWeight: "bold" }}>{item.mobile}</Controls.Typography>
                                                </Controls.Grid>
                                                {select === index &&
                                                    <Controls.Grid item sx={{ display: "flex" }} gap={1} mt={2}>
                                                        <CheckIcon sx={{ fontSize: 14, marginRight: 0.5, backgroundColor: theme.palette.one.text2, color: "white", borderRadius: 50, marginTop: 0.8 }} />
                                                        <Controls.Typography variant='caption1' sx={{ color: theme.palette.one.text2 }}>Selected</Controls.Typography>
                                                    </Controls.Grid>}
                                            </Controls.Grid>
                                        </Controls.Grid>
                                        <Controls.Grid item p={{ xs: 1, sm: 2 }}>
                                            <Controls.Grid item sx={{ display: "flex" ,cursor:"pointer"}} gap={1}onClick={() =>handleEditAddress(index,item._id)}>
                                                <Controls.Grid item sx={{ marginTop: 0.5, }}>

                                                    <Controls.ModeEditOutlineOutlinedIcon sx={{ fontSize: "18px" }} />
                                                </Controls.Grid>
                                                <Controls.Grid item>
                                                    <Controls.Typography variant='caption1'>Edit</Controls.Typography>

                                                </Controls.Grid>
                                            </Controls.Grid>

                                        </Controls.Grid>
                                    </Controls.Grid>
                                ))}
                            </Controls.Grid>
    </>
  )
}

export default ShowAddressComponentOne