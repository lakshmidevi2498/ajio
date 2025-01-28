import React, { useEffect, useState } from 'react'
import Controls from '../commons/Controls' 
import { useLocation, useNavigate } from 'react-router-dom'
import ShowAddressComponent from './ShowAddressComponent'
import { loadAddressInitiate } from '../redux/actions/loadAddressAction'
import { useDispatch, useSelector } from 'react-redux'
import { getToken, getUserId } from './GlobalFunction'
import { loadCartInitiate } from '../redux/actions/loadCartAction'
import { toast } from 'react-toastify'
import ActiveAddressComponentThree from './ActiveAddressComponentThree'

const DeliveryDetailsComponent = () => {
  const [bagTotal, setBagTotal] = useState(null)
  const [bagDiscount, setBagDiscount] = useState(null)
  const [orderTotal, setOrderTotal] = useState(null)
  const [open,setOpen] = useState(null)
    const [address,setAddress] =useState([])
    const [cartsData , setCartsData] = useState([])
  const location = useLocation();
  const dispatch = useDispatch()
  const userId = getUserId()
  const token = getToken()
  const navigate = useNavigate()

  const {activeAddress} = location.state || {};
  console.log(activeAddress,"activeAddress,")
  const getAddress = useSelector((state)=>state.loadAddress.data || {})
  console.log("getAddress",getAddress)
      const cartData = useSelector((state) => state.loadcartproducts.data || [])
      console.log("cartData", cartData)
      useEffect(() => {
          const fetchCart = async () => {
              dispatch(loadCartInitiate(token, userId))
          }
          fetchCart()
      }, [token, userId,dispatch])
  
      useEffect(() => {
          if (cartData && cartData.data) {
              const data = cartData.data.cartDetails;
              if (data && data.products) {
                  setCartsData(data.products);
                  console.log("productsData", data.products);
              }
          }
      }, [cartData]);
  useEffect(()=>{
      const fetchAddress = async () => {
         await  dispatch(loadAddressInitiate(userId))
      }
fetchAddress()
  },[userId,dispatch])

  useEffect(()=>{
    const fetchedAddresses = getAddress.data?.userAddress || []
      if(fetchedAddresses?.length >0){
      setAddress(fetchedAddresses)
      }
      console.log("address",fetchedAddresses)
  },[getAddress])
  useEffect(() => {
    const getItPrice = sessionStorage.getItem('getItPrice')
    const savings = sessionStorage.getItem('savings')
    const discount = sessionStorage.getItem('discount')
    setBagDiscount(discount)
    setBagTotal(savings)
    setOrderTotal(getItPrice)

  }, [bagTotal, bagDiscount, orderTotal])
  const handleAddress = () => {
    setOpen(true)

  }
  const handlePayment = () => {
    console.log({ bagTotal, bagDiscount, orderTotal, address, activeAddress, firstValidItem });
    
    if (
        bagTotal !== null &&  
        bagDiscount !== "" &&  
        orderTotal !== "" && 
        (address == [] || activeAddress !== undefined || firstValidItem !== undefined)
    ) {
        navigate('/payment');
    }
    else{
      toast("Please add your Address")
    }
    
  }

  const handleAddAddress = () => {
    setOpen(true)
  }
  const firstValidItem = address?.find(item => item.terms === true);
  const secondValidation = address[0]
  sessionStorage.setItem('activeAddressId',firstValidItem?._id)
  console.log("address:", address, "activeAddress:", activeAddress);
  console.log("secondValidation",secondValidation)
  sessionStorage.setItem('activeAddressId',secondValidation?._id)

  const getActiveId = () => {
    if (activeAddress) {
      return activeAddress._id; 
    } else if (secondValidation) {
      return secondValidation._id; 
    } else if (firstValidItem) {
      return firstValidItem._id; 
    } else {
      return null; 
    }
  };
  
 
  const activeId = getActiveId();
  
  
  if (activeId) {
    sessionStorage.setItem('activeId', activeId);
  } else {
    console.error("No valid ID to store in session.");
  }


    const getFutureDate = (days) => {
      const date = new Date();
      date.setDate(date.getDate() + days); 
      return date.toLocaleDateString("en-GB", { day: "numeric", month: "short" }); 
    };
    const getExpectedDate = (days) => {
      const date = new Date();
      date.setDate(date.getDate() + days); 
      return date.toLocaleDateString("en-GB", { day: "numeric" }); 
    };
    
  return (
    <>
      <Controls.Grid container justifyContent="center" mt={{xs:10,sm:15}}>
        <Controls.Grid item xs={12}sm={11}md={10} sx={{ justifyContent: "center", }}>
          
<ActiveAddressComponentThree  activeAddress={activeAddress} getFutureDate={getFutureDate}getExpectedDate={getExpectedDate}  firstValidItem={firstValidItem} secondValidation={secondValidation}
 handleAddAddress={handleAddAddress}  handleAddress={handleAddress}    bagTotal={bagTotal} bagDiscount={bagDiscount} orderTotal={orderTotal} address={address} handlePayment={handlePayment}/>

          <Controls.Grid item >
            <Controls.Grid item sx={{ display: "flex", }} gap={1} lg={6} px={{xs:2,lg:6}} my={2}>
              <Controls.Grid item sx={{ alignItems: "center" }}>
                <Controls.Box component="img" src="./assets/images/add-delivery.svg" sx={{ width: "50px", height: "90px ", color: "black" }} />
              </Controls.Grid>
              <Controls.Grid item sx={{ alignItems: "center" }} mt={2}>
                <Controls.Grid item>
                  <Controls.Typography variant='caption' sx={{ fontWeight: "bold", fontSize: "17px" }}>Expected Delivery </Controls.Typography>
                </Controls.Grid>
                <Controls.Grid item>
                  <Controls.Typography variant='caption' sx={{ fontWeight: "normal", fontSize: "15px", color: "#666666" }}>Estimated delivery dates for your order</Controls.Typography>
                </Controls.Grid>
              </Controls.Grid>
            </Controls.Grid>
            <Controls.Grid item xs={12} sx={{ display: {xs:"block",sm:"flex"}, }} px={{xs:2,lg:6}}>
              {cartsData?.map((item, index) => (
                <Controls.Grid key={index} item xs={12} sm={6} md={4} sx={{ display: 'flex' }} gap={1}>
                  <Controls.Box component="img" src={item?.product?.image || "default-image"} sx={{ width: "120px", height: "140px" }} />
                  <Controls.Grid item>
                    <Controls.Grid item>
                      <Controls.Typography variant="caption1" sx={{ fontWeight: "bold" }}>{getFutureDate(7)}</Controls.Typography>
                    </Controls.Grid>
                    <Controls.Grid item>
                      <Controls.Typography variant="caption1" sx={{ fontSize: "14px", textTransform: "initial" }}>{(item?.product.brandname).charAt(0).toUpperCase() + (item?.product.brandname).slice(1).toLowerCase()}</Controls.Typography>
                    </Controls.Grid>
                    <Controls.Grid item>
                      <Controls.Typography variant="caption1" sx={{ fontSize: "14px", color: "gray" }}>{item?.product.name}</Controls.Typography>
                    </Controls.Grid>
                  </Controls.Grid>
                </Controls.Grid>
              )
              )}

            </Controls.Grid>
          </Controls.Grid>

        </Controls.Grid>
        <Controls.Divider />
        {open && <ShowAddressComponent  open={open} setOpen={setOpen}/>}
      </Controls.Grid>
    </>
  )
}

export default DeliveryDetailsComponent