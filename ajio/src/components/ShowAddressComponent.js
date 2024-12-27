import React, { useEffect, useState } from 'react'
import Controls from '../commons/Controls'
import { Modal } from '@mui/material';
import theme from '../utilities/theme';
import CheckIcon from '@mui/icons-material/Check';
import AddressFormComponent from './AddressFormComponent';
import { useSelector, useDispatch } from 'react-redux'; 
import { getUserId } from './GlobalFunction';
import { loadAddressInitiate } from '../redux/actions/loadAddressAction';
import { useNavigate } from 'react-router-dom'

const style = {
    position: "absolute",
    top: { sm: "0%" },
    right: { sm: "0%" }, 
    width: "100%",
    maxWidth: { xs: "350px", sm: "400px", md: "500px", lg: "420px", xxl: "1200px" },
    height: "100vh",
    maxHeight: "100vh",
    bgcolor: "background.paper", 
    overflowY: "auto",
};

const ShowAddressComponent = ({ open, setOpen }) => {
    const addressIndex = sessionStorage.getItem('address')
    const [showAddress, setShowAddress] = useState(false)
    const [address, setAddress] = useState([])
    const [editAddress , setEditAddress]  =useState(null)
    const [select, setSelect] = useState(addressIndex)
    const userId = getUserId()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const addresspost = useSelector((state) => state.postAddress.data || {})
    console.log("addresspost", addresspost)
    const getAddress = useSelector((state) => state.loadAddress.data || {})
    console.log("getAddress", getAddress)

    useEffect(() => {
        const fetchAddress = async () => {
            await dispatch(loadAddressInitiate(userId))
        }
        fetchAddress()
    }, [])

    useEffect(() => {
        const fetchedAddresses = getAddress.data?.userAddress
        setAddress(fetchedAddresses)
    }, [getAddress])
    const handleClose = () => {
        setOpen(false)

    }
    const handleAddAddress = () => {
        setShowAddress(true)
    }


    const handleSelected = (index ,id) => {
        setSelect(index)
        navigate('/shipping', { state: { activeAddress: address[index] } })
        sessionStorage.setItem('address', index)
        setOpen(false) 
    }
    const handleEditAddress = (index ,id) => {
        setShowAddress(true) 
        setEditAddress(id)
        sessionStorage.setItem('editAddress', index)
    }
    return (
        <>
            <Controls.Grid container justifyContent="center" >

                <Modal
                    open={open}
                    onClose={handleClose}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",

                    }}
                >
                    <Controls.Grid
                        container
                        sx={{
                            ...style,
                        }}
                    >
                        {showAddress ? (
                            <>
                                <Controls.Grid item xs={12} p={3}>
                                    <Controls.Grid item sx={{ display: "flex", justifyContent: "space-between" }} >
                                        <Controls.Typography variant='caption1' sx={{ fontSize: "18px", fontWeight: "bold" }}>Add new Address</Controls.Typography>
                                        <Controls.CloseIcon sx={{ fontSize: "18px" }} onClick={handleClose} />
                                    </Controls.Grid>
                                    <AddressFormComponent setOpen={setOpen}  setShowAddress={setShowAddress}  editAddress={editAddress}/>
                                </Controls.Grid>
                            </>
                        ) : (


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

                        )}

                    </Controls.Grid>
                </Modal>
            </Controls.Grid>
        </>
    )
}

export default ShowAddressComponent