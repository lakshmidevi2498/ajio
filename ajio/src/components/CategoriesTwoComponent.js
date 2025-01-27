import React, {  useState } from 'react'
import Controls from '../commons/Controls'
import { Divider } from '@mui/material'
import CategorieCardsComponent from './CategorieCardsComponent' 
import { useParams } from 'react-router-dom';


const CategoriesTwoComponent = () => {

    const [read, setRead] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedOption, setSelectedOption] = useState("Relevance");
    const [isThreeGrid, setIsThreeGrid] = useState(true);

    const { categoryId, subcategoryId } = useParams();

    const open = Boolean(anchorEl);
    const handleReadMore = () => {
        setRead(true)
    }
    const handleLessMore = () => {
        setRead(false)
    } 
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (option) => {
        setSelectedOption(option);  
        handleClose();  
    };
    return (
        <>
            <Controls.Grid container justifycontent="center">
                <Controls.Grid item sx={{ justifyContent: "center", }} xs={12}>
                    <Controls.Grid item xs={12} sm={10} md={10}sx={{ justifyContent: "center", textAlign: "center", marginX: "auto", alignItems: "center", }}>
                        <Controls.Grid item>
                            <Controls.Typography variant="caption1" sx={{ fontSize: "14px" ,textTransform:"uppercase",letterSpacing:1,wordSpacing:1}}>{categoryId}'S</Controls.Typography>
                        </Controls.Grid>
                        <Controls.Grid item>
                             <Controls.Typography variant="caption1" sx={{ fontSize: "22px",fontWeight:"bold" }}>{subcategoryId}</Controls.Typography>
                        </Controls.Grid>
                        <Controls.Grid item sx={{ textAlign: "justify" }}>
                            <Controls.Typography variant="caption1" sx={{ fontSize: "12px", }}>Versatile and sophisticated, AJIO brings to you a wide range of coats and jackets for men. Be it printed, embroidered, ripped or distressed – we have everything. Browse through cool gilets, quilted bombers and winter jackets to keep your fashion game on fleek this cold
                                season. Let the bad boy out to play with leather jackets or sharpen up your look with</Controls.Typography>
                        </Controls.Grid>
                        {!read &&
                            <Controls.Grid item sx={{ textAlign: "justify" }} mb={3}>
                                <Controls.Typography variant="caption1" sx={{ cursor: 'pointer', fontSize: "13px", color: "#176d93" }} onClick={handleReadMore}>Read More</Controls.Typography>
                            </Controls.Grid>
                        }
                        {read &&
                            <>
                                <Controls.Grid item sx={{ textAlign: "justify" }}>
                                    <Controls.Typography variant='caption1' sx={{ fontSize: "12px", }}>
                                        traditional men’s coats. + Styles & Brands in Jackets Add a light layer over your workout gear with sports jackets, running jackets and hoodies infused with quick-dry technology to keep you warm and dry. Stay snug and stylish with lightweight fleece jackets without adding bulk to your outfit. Bringing the best to our store are exciting brands like Celio, Duke, Puma, and many more.Leather Jackets
                                    </Controls.Typography>
                                </Controls.Grid>
                                <Controls.Grid item sx={{ textAlign: "start" }}>
                                    <Controls.Typography variant="caption1" sx={{ cursor: 'pointer', fontSize: "13px", color: "#176d93" }} onClick={handleLessMore}>Read Less</Controls.Typography>
                                </Controls.Grid>
                            </>}
                    </Controls.Grid>
                    <Controls.Divider />
                    <Controls.Grid item sx={{ backgroundColor: "#f9f9f9", display: "flex", justifyContent: "space-between", alignItems: "center" }} p={1} my={.5}>
                        <Controls.Grid item xs={6} sm={4}>
                            <Controls.Typography variant='caption1'sx={{fontSize:{xs:"12px",md:"14px",fontWeight:"bold"}}}>5 Items Found</Controls.Typography>
                        </Controls.Grid>
                        <Controls.Grid item sx={{ display: {xs:"none",lg:"flex"}, justifyContent: 'center' }} gap={1} xs={12} sm={4}>
                            <Controls.Typography variant='caption1' sx={{ color: "lightgray" }}>GRID</Controls.Typography>
                            <Controls.Grid
                                item
                                sx={{ display: "flex", border: isThreeGrid ? " 1px solid black " : "1px solid lightgray" }}
                                gap={0.4}
                                onClick={() => setIsThreeGrid(true)}
                                p={0.5}
                            >
                                {[...Array(3)].map((_, index) => (
                                    <Divider
                                        key={index}
                                        orientation="vertical"
                                        sx={{ width: 7, height: 18, backgroundColor: isThreeGrid ? "gray" : "lightgray"  }}
                                    />
                                ))}
                            </Controls.Grid>

                            <Controls.Grid
                                item
                                sx={{ display: "flex", border:  isThreeGrid ? " 1px solid lightgray" : "1px solid black"}}
                                gap={0.4}
                                onClick={() => setIsThreeGrid(!isThreeGrid)}
                                p={0.5}
                            >
                                {[...Array(5)].map((_, index) => (
                                    <Divider
                                        key={index}
                                        orientation="vertical"
                                        sx={{ width: 7, height: 18,  backgroundColor: isThreeGrid ? "lightgray" : "gray"  }}
                                    />
                                ))}
                            </Controls.Grid>

                        </Controls.Grid>
                        <Controls.Grid
                            item
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }} gap={1} xs={6} sm={4}
                        >

                            <Controls.Grid item mt={.5}>
                                <Controls.Typography variant="caption1" sx={{ color: "lightgray" ,fontSize:{xs:"10px",sm:"12px"}}}>SORT BY</Controls.Typography>
                            </Controls.Grid>


                            <Controls.Grid
                                item
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    border: "1px solid black", 
                                }} onClick={handleClick}
                            >
                                <Controls.Typography
                                    variant="caption1"

                                    sx={{ padding: {xs:0,sm:0.5},fontSize:{xs:"12px"},}}
                                >
                                    {selectedOption}
                                </Controls.Typography>
                                <Controls.ExpandMoreIcon sx={{ color: "black", marginLeft: 1,fontSize:{xs:"12px"} ,padding:0,}} />
                            </Controls.Grid>

                            <Controls.Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    "aria-labelledby": "basic-button",
                                }}
                                sx={{marginTop:{xs:"20px"}}}
                            >
                                {["Relevance", "price highest first", "Discount", "price lowest first", "What's new", "Rating"].map(
                                    (option, index) => (
                                        <Controls.MenuItem
                                            key={index}
                                            onClick={() => handleMenuItemClick(option)}
                                        >
                                            {option}
                                        </Controls.MenuItem>
                                    )
                                )}

                            </Controls.Menu>
                        </Controls.Grid>

                    </Controls.Grid>
                    <Controls.Divider />
                    <Controls.Grid item xs={12}>
                        <CategorieCardsComponent isThreeGrid={isThreeGrid} />
                    </Controls.Grid>
                </Controls.Grid>
            </Controls.Grid>
        </>
    )
}

export default CategoriesTwoComponent

