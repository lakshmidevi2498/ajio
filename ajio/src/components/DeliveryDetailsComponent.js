import React, { useEffect, useState } from 'react'
import Controls from '../commons/Controls'
import theme from '../utilities/theme'
import { useLocation, useNavigate } from 'react-router-dom'
import ShowAddressComponent from './ShowAddressComponent'
import { loadAddressInitiate } from '../redux/actions/loadAddressAction'
import { useDispatch, useSelector } from 'react-redux'
import { getToken, getUserId } from './GlobalFunction'
import { loadCartInitiate } from '../redux/actions/loadCartAction'
import { toast } from 'react-toastify'

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
      }, [])
  
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
  },[])

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

  return (
    <>
      <Controls.Grid container justifyContent="center" mt={{xs:10,sm:15}}>
        <Controls.Grid item xs={12}sm={11}md={10} sx={{ justifyContent: "center", }}>
          <Controls.Grid item xs={12} sx={{ display: {xs:"block",sm:"flex"}, justifyContent: {xs:"",sm:"space-between"}, alignItems: "center", margin: "auto" }} gap={5}>
            <Controls.Grid item sm={8} sx={{}} >
              <Controls.Grid item sx={{ display: "flex", }} gap={1} xs={12} sm={12} lg={8} px={{xs:1,lg:6}}>
                <Controls.Grid item sx={{ alignItems: "center" }}>
                  <Controls.LocationOnOutlinedIcon sx={{ width: "40px", height: "80px ", color: "black" }} />
                </Controls.Grid>
                <Controls.Grid item sx={{ alignItems: "center" }} mt={2}>
                  <Controls.Grid item>
                    <Controls.Typography variant='caption' sx={{ fontWeight: "bold", fontSize: "17px" }}>Delivery Address</Controls.Typography>
                  </Controls.Grid>
                  <Controls.Grid item>
                    <Controls.Typography variant='caption' sx={{ fontWeight: "normal", fontSize: "15px", color: "#666666" }}>We will deliver your order to this address</Controls.Typography>
                  </Controls.Grid>
                </Controls.Grid>
              </Controls.Grid>
              {activeAddress ? (
                <>
                <Controls.Grid item mt={1} px={{xs:2,lg:8}} >
                
                <Controls.Grid item sx={{ display: {xs:"block",sm:"flex"}, justifyContent: {xs:"",sm:"space-between" }}}>
                  <Controls.Grid item>
                  <Controls.Grid item>
                      <Controls.Typography variant='caption1' sx={{ fontWeight: "bold", fontSize: "15px" }}>{activeAddress.name}</Controls.Typography>&nbsp;&nbsp;
                      <Controls.Typography variant='caption1' sx={{ border: "1px solid black", borderRadius: 1, fontSize: "12px", padding: 0.5 }}>{activeAddress.addressType}</Controls.Typography>
                    </Controls.Grid>
                    <Controls.Grid item>
                      <Controls.Typography variant='caption1' sx={{ fontWeight: "bold", color: theme.palette.one.text2, fontSize: "12px" }}>{activeAddress.terms === true ? "Default" : ""}</Controls.Typography>
                    </Controls.Grid>
                    <Controls.Grid item>
                      <Controls.Typography variant='caption1' sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>{activeAddress.area},&nbsp;{activeAddress.building}</Controls.Typography>
                    </Controls.Grid>
                    {activeAddress.landmark && 
                    <Controls.Grid item>
                    <Controls.Typography variant='caption1' sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>{activeAddress.landmark}</Controls.Typography>
                  </Controls.Grid>}
                  <Controls.Grid item>
                    <Controls.Typography variant='caption1' sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>{activeAddress.district},&nbsp;{activeAddress.state}</Controls.Typography>
                  </Controls.Grid>

                    
                    <Controls.Grid item>
                      <Controls.Typography variant='caption1' sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>India-{activeAddress.pincode}</Controls.Typography>
                    </Controls.Grid>
                    <Controls.Grid item>
                      <Controls.Typography variant='caption1' sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>Phone :</Controls.Typography>
                      <Controls.Typography variant='caption1' sx={{ fontWeight: "bold", color: '#6d6d6d', fontSize: "14px", fontWeight: "bold" }}>{activeAddress.mobile}</Controls.Typography>
                    </Controls.Grid>
                  </Controls.Grid>
                  <Controls.Grid item>
                    <Controls.Grid item sx={{ border: "1px dashed gray", borderRadius: 2 }} mt={1} p={2}>
                      <Controls.Grid item >
                        <Controls.Typography variant='caption1' sx={{ color: "#008526", fontWeight: "bold" }}>Cash on delivery available</Controls.Typography>
                      </Controls.Grid>
                      <Controls.Grid item>
                        <Controls.Typography variant='caption1' sx={{}}>Est Delivery </Controls.Typography><Controls.Typography variant='caption1'> 24-26 Dec</Controls.Typography>
                      </Controls.Grid>
                    </Controls.Grid>
                  </Controls.Grid>

                </Controls.Grid>

              </Controls.Grid>
                </>

) :
 (
 
 

          
    <Controls.Grid item mt={1} px={{ xs: 2, lg: 8 }}>
    {(firstValidItem || secondValidation) && (
      <Controls.Grid item sx={{ display: { xs: "block", sm: "flex" }, justifyContent: { xs: "flex-start", sm: "space-between" } }}>
        
        <Controls.Grid item  sx={{ display: { xs: "block", sm: "block" }}}>
        <Controls.Grid item>
          <Controls.Typography variant="caption1" sx={{ fontWeight: "bold", fontSize: "15px" }}>
            {secondValidation ? secondValidation.name : firstValidItem?.name}
          </Controls.Typography>&nbsp;&nbsp;
          <Controls.Typography variant="caption1" sx={{ border: "1px solid black", borderRadius: 1, fontSize: "12px", padding: 0.5 }}>
            {secondValidation ? secondValidation.addressType : firstValidItem?.addressType}
          </Controls.Typography>
        </Controls.Grid>
  
    
        <Controls.Grid item>
          <Controls.Typography variant="caption1" sx={{ fontWeight: "bold", color: theme.palette.one.text2, fontSize: "12px" }}>
            {secondValidation ? "" : firstValidItem?.terms ? "Default" : ""}
          </Controls.Typography>
        </Controls.Grid>
        <Controls.Grid item>
          <Controls.Typography variant="caption1" sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>
            {secondValidation ? secondValidation.area : firstValidItem?.area},&nbsp;{secondValidation ? secondValidation.building : firstValidItem?.building}
          </Controls.Typography>
        </Controls.Grid>
  
    
        {firstValidItem?.landmark || secondValidation?.landmark ? (
          <Controls.Grid item>
            <Controls.Typography variant="caption1" sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>
              {secondValidation ? secondValidation.landmark : firstValidItem?.landmark}
            </Controls.Typography>
          </Controls.Grid>
        ) : null}
  
    
        <Controls.Grid item>
          <Controls.Typography variant="caption1" sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>
            {secondValidation ? secondValidation.district : firstValidItem?.district},&nbsp;{secondValidation ? secondValidation.state : firstValidItem?.state}
          </Controls.Typography>
        </Controls.Grid>
  
    
        <Controls.Grid item>
          <Controls.Typography variant="caption1" sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>
            India-{secondValidation ? secondValidation.pincode : firstValidItem?.pincode}
          </Controls.Typography>
        </Controls.Grid>
  
    
        <Controls.Grid item>
          <Controls.Typography variant="caption1" sx={{ fontWeight: "normal", color: '#6d6d6d', fontSize: "14px" }}>
            Phone :
          </Controls.Typography>
          <Controls.Typography variant="caption1" sx={{ fontWeight: "bold", color: '#6d6d6d', fontSize: "14px" }}>
            {secondValidation ? secondValidation.mobile : firstValidItem?.mobile}
          </Controls.Typography>
        </Controls.Grid>
        </Controls.Grid>
        <Controls.Grid item>
          <Controls.Grid item sx={{ border: "1px dashed gray", borderRadius: 2 }} mt={1} p={2}>
            <Controls.Grid item>
              <Controls.Typography variant="caption1" sx={{ color: "#008526", fontWeight: "bold" }}>
                Cash on delivery available
              </Controls.Typography>
            </Controls.Grid>
            <Controls.Grid item>
              <Controls.Typography variant="caption1">Est Delivery </Controls.Typography>
              <Controls.Typography variant="caption1"> 30-31 Dec</Controls.Typography>
            </Controls.Grid>
          </Controls.Grid>
        </Controls.Grid>
  
      </Controls.Grid>
    )}
  </Controls.Grid>
  
                 
                  ) }
              <Controls.Grid
  item
  sx={{ cursor: "pointer" }}
  onClick={handleAddress}
  my={3}
  px={{ xs: 2, lg: 7 }}
>
  {(address.length > 0 || activeAddress !== undefined) ? (
    <Controls.Typography
      variant="caption1"
      sx={{ color: theme.palette.one.text, fontWeight: "bold" }}
    >
      Change Address
    </Controls.Typography>
  ) : (
    <Controls.Typography
      variant="caption1"
      sx={{ color: theme.palette.one.text, fontWeight: "bold" }} onClick={handleAddAddress}
    >
      Add Address
    </Controls.Typography>
  )}
</Controls.Grid>

              <Controls.Divider sx={{display:{xs:'none',sm:"block"}}}/>
            </Controls.Grid>

            <Controls.Grid item sm={3} px={{xs:2,sm:0}}>
              <Controls.Grid item xs={12} sx={{ backgroundColor: "#fafafa", border: "1px solid lightgray" }}>
                <Controls.Grid item p={1}>
                  <Controls.Typography variant='caption1' sx={{ fontWeight: "bold" }}>Order Details</Controls.Typography>
                </Controls.Grid>
                <Controls.Grid item px={2} sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Controls.Grid item >
                    <Controls.Typography variant='caption1' sx={{ fontSize: "14px" }}>Bag Total</Controls.Typography>
                  </Controls.Grid>
                  <Controls.Grid item >
                    <Controls.Typography variant='caption1' sx={{ fontSize: "14px", fontWeight: "medium" }}>₹{bagTotal} .00</Controls.Typography>
                  </Controls.Grid>
                </Controls.Grid>
                <Controls.Grid item px={2} sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Controls.Grid item >
                    <Controls.Typography variant='caption1' sx={{ fontSize: "14px" }}>Bag Discount</Controls.Typography>
                  </Controls.Grid>
                  <Controls.Grid item >
                    <Controls.Typography variant='caption1' sx={{ fontSize: "14px", fontWeight: "medium", color: theme.palette.one.text2 }}>-₹{bagDiscount}.00</Controls.Typography>
                  </Controls.Grid>
                </Controls.Grid>
                <Controls.Grid item px={2}>
                  <Controls.Typography variant='caption1'>Convenience Fee</Controls.Typography>&nbsp;<Controls.Typography variant='caption1' sx={{ color: theme.palette.one.text, fontSize: "12px" }}>what's this</Controls.Typography>
                </Controls.Grid>
                <Controls.Grid item px={3} sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Controls.Grid item >
                    <Controls.Typography variant='caption1' sx={{ fontSize: "14px", color: "lightgray" }}>Delivert Fee</Controls.Typography>
                  </Controls.Grid>
                  <Controls.Grid item >
                    <Controls.Typography variant='caption1' sx={{ fontSize: "14px", fontWeight: "medium" }}>₹99 .00</Controls.Typography>
                  </Controls.Grid>
                </Controls.Grid>
                <Controls.Grid item px={2} sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Controls.Grid item >
                    <Controls.Typography variant='caption1' sx={{ fontSize: "14px" }}>Order Total</Controls.Typography>
                  </Controls.Grid>
                  <Controls.Grid item >
                    <Controls.Typography variant='caption1' sx={{ fontSize: "14px", fontWeight: "bold" }}>₹{Number(orderTotal) + 99}.00</Controls.Typography>
                  </Controls.Grid>
                </Controls.Grid>
                <Controls.Grid item mt={4} sx={{ backgroundColor: theme.palette.one.text2, textAlign: 'center', color: "white", cursor: "pointer" }} onClick={handlePayment}>
                  <Controls.Typography sx={{ paddingX: { xs: "72px", sm: "0px", lg: '50.8px' }, paddingY: { xs: "5px", lg: "12px" }, borderRadius: 0, }}>PROCEED TO PAYMENT</Controls.Typography>
                </Controls.Grid>

              </Controls.Grid>
            </Controls.Grid>
          </Controls.Grid>

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
                      <Controls.Typography variant="caption1" sx={{ fontWeight: "bold" }}>26 Dec</Controls.Typography>
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