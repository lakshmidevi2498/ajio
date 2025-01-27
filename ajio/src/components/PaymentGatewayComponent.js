import React, { useEffect, useState } from 'react';
import Controls from '../commons/Controls';
import theme from '../utilities/theme';
import { useDispatch, useSelector } from 'react-redux'
import { razorpayOrderInitiate } from '../redux/actions/razorpayOrderAction';
import { razorpayOrderValidateInitiate } from '../redux/actions/razorpayOrderValidationAction'
import { deleteOrderInitiate } from '../redux/actions/deleteOrderAction';
import { getToken, getUserId } from './GlobalFunction';
import { loadCartInitiate } from '../redux/actions/loadCartAction';

const PaymentGatewayComponent = ({ totalAmount, bagTotal, bagDiscount, orderTotal, paymentId, razorpayOrderId }) => {
    const [selectedMonth, setSelectedMonth] = useState("Month");
    const [selectedYear, setSelectedYear] = useState("Year");
    const [id, setId] = useState(null)


    const razorpayOrderDetails = useSelector((state) => state.razopayorder.data || [])
    console.log("razorpayOrderDetails", razorpayOrderDetails)

    const orderDeleted = useSelector((state) => state.deleteorder.data || [])
    console.log("orderDeleted", orderDeleted)

    const dispatch = useDispatch()
    const currency = "INR";
    const receiptId = "qwsaql";

    useEffect(() => {
        const cartId = sessionStorage.getItem('cartId')
        setId(cartId)
    }, [])



    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const paymentWays = ["Credit/ Debit Card", "NetBanking", "Wallet", "UPI", "EMI", "Cash on Delivery"];
    const years = Array.from({ length: 31 }, (_, i) => 2000 + i);

    const handleMonthChange = (event) => {
        setSelectedMonth(parseInt(event.target.value));
    };

    const handleYearChange = (event) => {
        setSelectedYear(parseInt(event.target.value));
    };
    const handleRazorpay = async () => {
        try {
            await dispatch(razorpayOrderInitiate({
                amount: totalAmount * 100,
                currency,
                receipt: receiptId,
            }));

            const waitForOrderDetails = new Promise((resolve, reject) => {
                const interval = setInterval(() => {
                  if (razorpayOrderDetails) {
                    clearInterval(interval);
                    resolve(razorpayOrderDetails?.data);
                  }
                }, 200);
          
                setTimeout(() => {
                  clearInterval(interval);
                  reject(new Error("Order details are not available."));
                }, 5000); 
              });
          
              const order = await waitForOrderDetails;


                if (order?.id) {
                    const options = {
                        key: "rzp_test_mqSCiPTo2G5Peh",
                        amount: totalAmount,
                        currency,
                        name: "Ajio",
                        description: "Test Transaction",
                        image: "https://logos-world.net/wp-content/uploads/2022/12/Ajio-Logo.png",
                        order_id: order.id,
                        handler: async function (res) {
                            const body = {
                                razorpay_order_id: res.razorpay_order_id,
                                razorpay_payment_id: res.razorpay_payment_id,
                                razorpay_signature: res.razorpay_signature
                            };
                            console.log("Payment success body", body);
                            const paymentDetails = {
                                orderId: res.razorpay_order_id,
                                paymentId: res.razorpay_payment_id,
                            };

                            console.log("Combined Payment Details", paymentDetails);

                            try {
                                await dispatch(razorpayOrderValidateInitiate(body));

                                if (id && totalAmount) {
                                    console.log("id,totalAmountv", id, totalAmount)
                                    const addressId = sessionStorage.getItem('activeId')

                                    await dispatch(deleteOrderInitiate(id, totalAmount, bagTotal, bagDiscount, orderTotal, addressId, paymentDetails));
                                    console.log("Order deleted successfully", id);
                                    console.log("addressId in paymentpage",addressId)

                                    sessionStorage.removeItem('cartId');
                                    sessionStorage.removeItem('discount');
                                    sessionStorage.removeItem('getItPrice');
                                    sessionStorage.removeItem('savings');
                                    sessionStorage.removeItem('activeAddressId')
                                    sessionStorage.removeItem('address');
                                    let userId = getUserId()
                                    let token = getToken()
                                    if (userId && token) {
                                        console.log("userId", userId)
                                        await dispatch(loadCartInitiate(token, userId))
                                    }

                                }
                            } catch (deleteError) {
                                console.error("Error during order deletion:", deleteError);
                                alert("Payment was successful, but there was an issue finalizing the order. Please contact support.");
                            }
                        },
                        prefill: {
                            name: "Lakshmi",
                            email: "lakshmi@gmail.com",
                            contact: "9056890110"
                        },
                        notes: {
                            address: "Razorpay Corporate Office"
                        },
                        theme: {
                            color: "#3399cc"
                        }
                    };

                    const rzp1 = new window.Razorpay(options);
                    rzp1.on("payment.failed", function (response) {
                        console.log("Payment failed", response.error);
                        alert("Payment failed. Please try again.");
                    });
                    rzp1.open();
                } else {
                    console.error("Order ID is not available");
                } 
        } catch (error) {
            console.error("Error processing the order or payment:", error);
            alert("There was an error processing your payment. Please try again later.");
        }
    }
    return (
        <>
            <Controls.Grid container justifyContent="center">
                <Controls.Grid item xs={12} sx={{ display: { xs: "block", sm: "flex" } }}>
                    <Controls.Grid
                        item
                        sm={3}
                        sx={{
                            display: { xs: "block", sm: "flex" },
                            height: "242px",
                            border: "1px solid lightgray",
                            borderRight: { xs: "1px solid lightgray", sm: "none" },
                        }}
                    >
                        <Controls.Grid
                            item
                            sx={{

                                width: "100%",
                            }}
                        >
                            {paymentWays.map((item, index) => (
                                <Controls.Grid
                                    item
                                    sx={{ backgroundColor: index === 0 ? "white" : "#f0f0f0", padding: 1 }}
                                    key={index}
                                >
                                    <Controls.Typography
                                        variant="caption1"
                                        sx={{
                                            color: index === 0 ? theme.palette.one.text2 : "black",
                                            fontWeight: "bold",
                                            backgroundColor: index === 0 && "white",
                                            fontSize: { xs: "15px", sm: "15px", md: "12px", lg: "15px" }
                                        }}
                                    >
                                        {item}
                                    </Controls.Typography>
                                </Controls.Grid>
                            ))}
                        </Controls.Grid>
                        <Controls.Grid item></Controls.Grid>
                    </Controls.Grid>
                    <Controls.Grid item sm={9} sx={{ border: "1px solid lightgray", }} mt={{ xs: 2, sm: 0 }}>
                        <Controls.Grid item p={2} sm={8} md={10} lg={8}>
                            <Controls.Grid item mb={2}>
                                <Controls.Typography variant='caption1' sx={{ fontWeight: "bold" }}>Add New Card</Controls.Typography>
                            </Controls.Grid>
                            <Controls.Grid item >
                                <Controls.Typography variant='caption1'>Card Number</Controls.Typography><br />
                                <Controls.TextField id="outlined-basic" label="" variant="outlined" size="small" fullWidth />
                            </Controls.Grid>
                            <Controls.Grid item mt={3}>
                                <Controls.Typography variant='caption1'>Name on Card</Controls.Typography><br />
                                <Controls.TextField id="outlined-basic" label="" variant="outlined" size="small" fullWidth />
                            </Controls.Grid>
                            <Controls.Grid item sx={{ display: "flex", justifyContent: "space-between" }} my={2}>
                                <Controls.Typography variant='caption1'>Expiration Date</Controls.Typography>
                                <Controls.Typography variant='caption1'>CVV<Controls.Typography variant='caption1' sx={{ color: theme.palette.one.text, fontWeight: "bold" }}>(What’s This?)</Controls.Typography></Controls.Typography>
                            </Controls.Grid>

                            <Controls.Grid
                                item
                                sx={{ display: "flex", gap: "20px", alignItems: "center" }} xs={12} gap={2}
                            >

                                <Controls.Grid item xs={4}>
                                    <select
                                        id="month"
                                        value={selectedMonth}
                                        onChange={handleMonthChange}
                                        style={{ padding: { xs: "2px 1px", sm: "5px" }, fontSize: "14px" }}
                                    >
                                        <option value="Month" disabled>
                                            Month
                                        </option>
                                        {months.map((month, index) => (
                                            <option key={index} value={month}>
                                                {month}
                                            </option>
                                        ))}
                                    </select>
                                </Controls.Grid>


                                <Controls.Grid item xs={4}>
                                    <select
                                        id="year"
                                        value={selectedYear}
                                        onChange={handleYearChange}
                                        style={{
                                            padding: "2px 15px",
                                            fontSize: { xs: "10px", sm: "14px" },
                                            width: "100%",
                                        }}
                                    >
                                        <option
                                            value="Year"
                                            disabled
                                            style={{
                                                width: { xs: "60px", sm: "50px" },
                                                height: "20px"
                                            }}
                                        >
                                            Year
                                        </option>
                                        {years.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </Controls.Grid>


                                <Controls.Grid item sm={4}>
                                    <Controls.Box
                                        component="input"
                                        type="text"
                                        id="fname"
                                        name="fname"
                                        sx={{
                                            height: { xs: "19px", lg: "20px" },
                                            fontSize: { xs: "5px", sm: "7px", md: "8px", lg: "8px" },
                                        }} mb={.5}
                                    />
                                </Controls.Grid>
                            </Controls.Grid>


                            <Controls.Grid item my={1}>
                                <Controls.Grid item sx={{ display: "flex", alignItems: "center" }}>
                                    <Controls.Checkbox
                                        checked={true}
                                        sx={{
                                            color: theme.palette.one.text2,  
                                            '&.Mui-checked': {
                                                color: theme.palette.one.text2, 
                                            }
                                        }}
                                    />
                                    <Controls.Typography sx={{ fontSize: "14px", marginLeft: 0 }}>
                                        Save this card securely
                                    </Controls.Typography>
                                </Controls.Grid>
                            </Controls.Grid>


                            <Controls.Grid item onClick={() =>handleRazorpay}>
                                <Controls.Button variant='contained' sx={{ paddingX: "20px" }} onClick={(e) => {
                                    e.stopPropagation();
                                    handleRazorpay();
                                }}>PAY ₹ {totalAmount} SECURELY</Controls.Button>
                            </Controls.Grid>
                            <Controls.Grid item>
                                <Controls.Typography variant='caption1' sx={{ fontSize: "12px" }}>By placing this order, you agree to AJIO's T&C</Controls.Typography>
                            </Controls.Grid>

                        </Controls.Grid>

                    </Controls.Grid>
                </Controls.Grid>
            </Controls.Grid>
        </>
    );
};

export default PaymentGatewayComponent;
