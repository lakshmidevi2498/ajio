import React, { useEffect, useState } from 'react'
import Controls from '../commons/Controls'
import theme from '../utilities/theme'
import { useNavigate } from 'react-router-dom'

const OrderDetailsComponent = ({ products, }) => {
    console.log("products OrderDetailsComponent", products)
    const [bagTotal, setBagTotal] = useState(null)
    const [bagDiscount, setBagDiscount] = useState(null)
    const [orderTotal, setOrderTotal] = useState(null)
   const navigate = useNavigate()


    useEffect(() => {
        if (products && products.length > 0) {
            const getitprice = products.reduce((total, item) => {
                if (item.product && item.product.getitprice !== undefined) {
                    return total + item.product.getitprice*item.quantity ;
                }
                return total;
            }, 0);
            console.log("getitprice", getitprice);
            setOrderTotal(getitprice)
            sessionStorage.setItem("getItPrice",getitprice)
        }
    }, [products]);
    useEffect(() => {
        if (products && products.length > 0) {
            const savings = products.reduce((total, item) => {
                if (item.product && item.product.price !== undefined) {
                    return total + item.product.price ;
                }
                return total;
            }, 0);
            console.log("savings", savings);
            setBagDiscount(savings)
            sessionStorage.setItem("savings",savings)
        }
    }, [products]);
    useEffect(() => {
        if (products && products.length > 0) {
            const discount = products.reduce((total, item) => {
                if (item.product && item.product.discountOne !== undefined) { 
                    const discountValue = parseInt(item.product.discountOne.replace(/,/g, ''), 10);
                    if (!isNaN(discountValue)) {
                        return total + discountValue;
                    }
                }
                return total;
            }, 0);
        
            console.log("discount", discount);
            setBagTotal(discount);
            sessionStorage.setItem("discount",discount)
        }
        
    }, [products]);

    const handleShipping = () => {
        if(products.length >0){
        navigate('/shipping',{state:{cartData:products}})
        }
    }



    return (
        <>
            <Controls.Grid container justifyContent="center">
                <Controls.Grid item xs={12}>
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
                                <Controls.Typography variant='caption1' sx={{ fontSize: "14px", fontWeight: "bold" }}>₹{(orderTotal+99)} .00</Controls.Typography>
                            </Controls.Grid>
                        </Controls.Grid>
                        <Controls.Grid item mt={4} sx={{backgroundColor:theme.palette.one.text2,textAlign:'center',color:"white",cursor:"pointer"}} onClick={handleShipping}>
                            <Controls.Typography sx={{ paddingX: {xs:"72px",sm:"0px",lg:'50.8px'}, paddingY: {xs:"5px",lg:"12px"}, borderRadius: 0 ,}}>PROCEED TO SHIPPING</Controls.Typography>
                        </Controls.Grid>

                    </Controls.Grid>

                    <Controls.Grid item xs={12} sx={{ border: `1px dashed ${theme.palette.one.text2}` }} my={2} p={1}>
                        <Controls.Grid item my={1}>
                            <Controls.Typography variant='caption1' sx={{ fontWeight: "bold" }}>Apply Coupon</Controls.Typography>
                        </Controls.Grid>
                        <Controls.Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                            <Controls.TextField
                                label="Enter coupon code"
                                size="small"
                                sx={{
                                    borderColor: 'transparent',
                                    '& .MuiInputBase-root': {
                                        paddingRight: '0px',
                                        borderRadius: 0
                                    }
                                }}
                            />
                            <Controls.Button variant='contained' sx={{ backgroundColor: "#f5f5f5", color: "black", borderRadius: 0, paddingY: 0.85, fontWeight: "medium" }}>
                                APPLY
                            </Controls.Button>
                        </Controls.Grid>

                        <Controls.Grid item sx={{textAlign:"start"}} my={2}>
                            <Controls.Grid item mb={1}>
                            <Controls.Typography variant='caption1' sx={{fontSize:'16px',fontWeight:"bold",}}>Applicable Coupons</Controls.Typography>
                            </Controls.Grid>
                            <Controls.Grid item>
                                {products.map((item,index)=>(
                                    <>
                                    <Controls.Grid item xs={12} key={index} sx={{display:"flex"}} mb={1} gap={1}>
                                        <Controls.Box component='img' src={item.product.image} width="100%" height="100%" sx={{width:"60px",height:"70px"}}/>
                                          <Controls.Grid item>
                                            <Controls.Typography variant='caption1' sx={{fontSize:"14px",}}>Coupon:{item.product.code}</Controls.Typography><br/>
                                          
                                                <Controls.Typography variant='caption1' sx={{fontSize:"10px"}}>Free Shipping on 799 and above. Just for you.</Controls.Typography><br/>
                                           
                                                <Controls.Typography variant='caption1' sx={{fontSize:"13px",color:theme.palette.one.text}}>View T & C.</Controls.Typography><br/>
                                                                                            
                                          </Controls.Grid>
                                    </Controls.Grid>
                                    </>
                                ))}
                            </Controls.Grid>
                        </Controls.Grid>
                            
                         


                    </Controls.Grid>

                    <Controls.Grid item xs={12} sx={{ backgroundColor: "#fafafa", border: "1px solid lightgray" }} p={1}>
                        <Controls.Grid item>
                            <Controls.Typography variant='caption1' sx={{fontWeight:"bold",fontSize:"15px"}}>Return/Refund policy</Controls.Typography>
                        </Controls.Grid>
                        <Controls.Grid item>
                            <Controls.Typography variant='caption1' sx={{fontWeight:"normal",fontSize:"14px"}}>In case of return, we ensure quick refunds. Full amount will be refunded excluding Convenience Fee</Controls.Typography>
                        </Controls.Grid>
                        <Controls.Grid item>
                            <Controls.Typography variant='caption1' sx={{fontWeight:"bold",fontSize:"14px",color:theme.palette.one.text}}>Read Policy</Controls.Typography>
                        </Controls.Grid>
                                
                    </Controls.Grid>
                </Controls.Grid>
            </Controls.Grid>
        </>
    )
}

export default OrderDetailsComponent