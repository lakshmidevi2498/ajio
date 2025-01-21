import React, { useEffect, useState } from 'react'
import Controls from '../commons/Controls'
import QuickViewComponent from './QuickViewComponent'
import { useDispatch, useSelector } from 'react-redux'
import { useParams,useNavigate } from 'react-router-dom';
import { handleRecentView } from './GlobalFunction';

const CategorieCardsComponent = ({ isThreeGrid }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const [quickView, setQuickView] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([])
    const [innerData, setinnerData] = useState([])
    const [recentlyViewed, setRecentlyViewed] = useState([]);
    const navigate= useNavigate()

    const dispatch = useDispatch()
    const { categoryId, subcategoryId } = useParams();
    const productData = useSelector((state) => state.loadproductsdata.data || {})
    console.log("productData", productData)



 

    useEffect(() => {
        const pdata = productData?.data || [];
        const filtered = pdata?.filter(
            (item) =>
                item.categories === categoryId &&
                item.subcatergory === subcategoryId
        );
        setData(filtered);
        console.log("Filtered Data:", filtered);
    }, [productData, categoryId, subcategoryId]);


      
    useEffect(() => {
        localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
      }, [recentlyViewed]);

    const handleHover = (item) => {

        setQuickView(true)
        setinnerData(item)
        setOpen(true)
    }
    const handleClose = () => {
        setQuickView(false)
        setOpen(false)
    }

    const handleNavigate = (item) => {
        handleRecentView(item)
        navigate('/innerproducts',{state:{innerproductsdata:item}})
    }


      
    return (
        <>
            <Controls.Grid container justifyContent="center" >
                {data.map((item, index) => (
                    <Controls.Grid mb={{xs:2,sm:4}}
                        item
                        xs={12}
                        sm={6}
                        md={isThreeGrid ? 4 : 2.4}
                        key={index}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",    
                            padding: 1,
                            position: "relative",
                            height:{xs:isThreeGrid?"500px":"400px",sm:isThreeGrid ? "500px":"400px"},
                            
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        
                    >

                        <Controls.Box
                            component="img"
                            src={item.image}
                            sx={{
                                width: "100%",
                                height: "auto",
                                maxWidth: "300px",
                                maxHeight: isThreeGrid ? "350px":"300px",
                                position: "relative",
                            }}
                            onClick={() => handleNavigate(item)}
                        />
                        {hoveredIndex === index &&
                            <Controls.Grid
                                item
                                xs={12}
                                sx={{
                                    backgroundColor: "white",
                                    opacity: 0.7,
                                    color: "#176d93",
                                    fontWeight: "bold",
                                    position: "absolute",
                                    zIndex: 20,
                                    top: !isThreeGrid?"50%" : "68.5%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: "100%",
                                    textAlign: "center",
                                    padding: 1,
                                    display: { xs: "none", md: "block" }
                                }}
                                onClick={()=>handleHover(item)}
                            >
                                <Controls.Typography variant="caption1" sx={{ fontSize: "16px", cursor: "pointer" }}>QUICK VIEW</Controls.Typography>
                            </Controls.Grid>
                        }


                        <Controls.Grid item sx={{ textAlign: "center", marginTop: 0,marginX:"auto",height:{xs:"200px"}, }}>
                            <Controls.Grid item>
                                <Controls.Typography variant="caption1" sx={{ fontWeight: "bold",color:"#866528" ,fontSize:"14px"}}>{item.brandname}</Controls.Typography>
                            </Controls.Grid>
                            <Controls.Grid item>
                                <Controls.Typography variant="caption1" sx={{fontSize:"13px"}}>
                                    {item.name}
                                </Controls.Typography>
                            </Controls.Grid>
                            <Controls.Grid
                                item
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: 1
                                }}
                            >
                               { item.rating !== 0 && <Controls.Box my={1 }
                                    sx={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        backgroundColor: item.rating >=3 ? "green":"red",
                                        color: "white",
                                        padding: "4px 8px",
                                        borderRadius: "4px",
                                    }}
                                >
                                    <Controls.Typography variant="caption1">{item.rating}</Controls.Typography>
                                    <Controls.StarBorderIcon sx={{ fontSize: "15px", marginLeft: "4px", marginTop: 0.5 }} />
                                    <Controls.Typography variant="caption1" sx={{ marginLeft: "8px", }}>| {item.reviews}</Controls.Typography>
                                </Controls.Box>}
                            </Controls.Grid>
                            <Controls.Grid item sx={{display:"flex",justifyContent:"center"}} gap={1}>
                            <Controls.Typography variant="caption1" sx={{fontSize:"14px",fontWeight:"bold",marginBottom:"5px",marginTop:"2px"}}>₹{item.price}</Controls.Typography>
                            {item.discountOne &&
                            <>
                            <Controls.Typography
                                variant="caption1"
                                sx={{ textDecoration: "line-through", color: "gray" }}
                            >
                                ₹{item.discountOne}
                            </Controls.Typography>
                             <Controls.Typography
                             variant="caption1"
                             sx={{color: "#866528" }}
                         >
                            {item.discountTwo}
                         </Controls.Typography>
                         </>}
                         </Controls.Grid>
                            {item.offerprice !== 0 && <Controls.Grid item sx={{ display: "flex", alignItems: "center", textAlign: "center",justifyContent:"center" }}mx="auto">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="15"
                                    height="15"
                                    viewBox="0 0 24 24"
                                    fill="green"
                                    style={{ marginTop: '2px', }}
                                >
                                    <path
                                        d="m20.749 12l1.104-1.908a1 1 0 0 0-.365-1.366l-1.91-1.104v-2.2a1 1 0 0 0-1-1h-2.199l-1.103-1.909a1 1 0 0 0-.607-.466a1 1 0 0 0-.759.1L12 3.251l-1.91-1.105a1 1 0 0 0-1.366.366L7.62 4.422H5.421a1 1 0 0 0-1 1v2.199l-1.91 1.104a1 1 0 0 0-.365 1.367L3.25 12l-1.104 1.908a1.004 1.004 0 0 0 .364 1.367l1.91 1.104v2.199a1 1 0 0 0 1 1h2.2l1.104 1.91a1.01 1.01 0 0 0 .866.5c.174 0 .347-.046.501-.135l1.908-1.104l1.91 1.104a1 1 0 0 0 1.366-.365l1.103-1.91h2.199a1 1 0 0 0 1-1v-2.199l1.91-1.104a1 1 0 0 0 .365-1.367zM9.499 6.99a1.5 1.5 0 1 1-.001 3.001a1.5 1.5 0 0 1 .001-3.001m.3 9.6l-1.6-1.199l6-8l1.6 1.199zm4.7.4a1.5 1.5 0 1 1 .001-3.001a1.5 1.5 0 0 1-.001 3.001"
                                    />
                                </svg>

                                <Controls.Typography variant='caption1' sx={{ color: "green", }}>OfferPrice:₹{item.offerprice}</Controls.Typography>
                            </Controls.Grid>}
                        </Controls.Grid>
                    </Controls.Grid>
                ))}
                {quickView && (
                    <QuickViewComponent open={open} setOpen={setOpen}  handleClose={handleClose} innerData={innerData}/>
                )}


            </Controls.Grid>

        </>
    )
}

export default CategorieCardsComponent