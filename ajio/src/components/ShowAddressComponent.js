import React, { useEffect, useState } from 'react'
import Controls from '../commons/Controls'
import { Modal } from '@mui/material';
import AddressFormComponent from './AddressFormComponent';
import { useSelector, useDispatch } from 'react-redux'; 
import { getUserId } from './GlobalFunction';
import { loadAddressInitiate } from '../redux/actions/loadAddressAction';
import { useNavigate } from 'react-router-dom'
import ShowAddressComponentOne from './ShowAddressComponentOne';

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


                           <ShowAddressComponentOne      handleAddAddress={handleAddAddress} handleSelected={handleSelected}handleEditAddress={handleEditAddress} select={select}
                           address={address}addressIndex={addressIndex}handleClose={handleClose}
                           />

                        )}

                    </Controls.Grid>
                </Modal>
            </Controls.Grid>
        </>
    )
}

export default ShowAddressComponent