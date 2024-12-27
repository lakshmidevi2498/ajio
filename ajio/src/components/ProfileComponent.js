import React from 'react'
import Controls from '../commons/Controls'
import { Outlet, useNavigate } from 'react-router-dom'
import MyOrdersComponent from './MyOrdersComponent'
import MyProfileDetailsComponent from './MyProfileDetailsComponent'

const ProfileComponent = ({view}) => {
  const navigate = useNavigate()
    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/')

      }

      const categories = [
        {
          title: "Orders & Credits",
          items: [
             { name: "Orders" ,link:"orders"},
              { name: "AJIO Wallet" },
              { name: "Invite Friends",link:"/categories/men/shirt" },
              {name:"My rewards"},
              {name:"Customer Care"}
          ],
      },
     
      ]
      const categoriesTwo = [
        {
          title: "Profile",
          items: [
             { name: "Personal Information" ,link:"update-profile"},
              { name: "Address Book" },
              { name: "Payments",link:"/categories/men/shirt" },
           
          ],
      },
      ]
  return (
    <>
    <Controls.Grid container justifyContent="center" mt={{xs:10,md:12}}>
        <Controls.Grid item xs={12} sx={{justifyContent:"center",backgroundColor:"#F7F7F7",}} >
          <Controls.Grid xs={11} sm={11} md={10}sx={{justifyContent:"center",alignItems:"center",margin:"auto"}}p={{xs:0,lg:0}} mt={{xs:5,}}>
            <Controls.Grid item sx={{justifyContent:{xs:"",sm:'space-between'},display  :{xs:"block",sm:"flex"}} } gap={3}>
                 <Controls.Grid item xs={12} sm={4}lg={2.5} sx={{backgroundColor: "#FFFFFF", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",height:"400px"}}>
                    <Controls.Grid item xs={12} p={1}>
                    <Controls.Grid item xs={12} >
                      <Controls.Grid item my={1}>
                        <Controls.Typography variant='caption1' sx={{fontWeight:"bold"}}>My Account</Controls.Typography>
                      </Controls.Grid>
                    {categories.map((category, index) => (
    <Controls.Grid item xs={12} key={index} my={2}>
        <Controls.Typography sx={{ fontWeight: "bold", mb: 1 ,color:"#4a657a"}}>{category.title}</Controls.Typography>
        {category.items.map((item, idx) => (
            <>
                <Controls.Grid item sx={{ display: "flex",marginLeft:3 }}>
                    <Controls.Typography
                        key={idx}
                        onClick={() => {
                            if (item.link) {
                                navigate(item.link); 
                                // closeMenu(); 
                            }
                        }}
                        mb={idx === 2 ? -10 : 0.5}
                        sx={{
                          
                            fontSize: "13px",
                            cursor: item.link ? "pointer" : "default",
                            color:"#6d6d6d",
                            fontWeight:"bold",
                            fontSize:"15px",
                            // '&:hover': item.link ? { textDecoration: "underline" } : {},
                        }}
                    >
                        {item.name}
                    </Controls.Typography>
                    {(idx === 1 || idx === 2) && (
                      <Controls.Grid item>
                        <Controls.Box sx={{ backgroundColor: "#FF6347", color: "white", fontSize: "8px", marginLeft: "8px", padding: "2px 4px", borderRadius: "4px" }}>
                            NEW
                        </Controls.Box>
                        </Controls.Grid>
                    )}
                </Controls.Grid>
                {idx === 2 && <Controls.Typography variant='caption1' sx={{ fontSize: "10px",marginLeft:3 , marginBottom: 1}}>Earn ₹100 AJIO Points for every friend</Controls.Typography>}
            </>
        ))}
    </Controls.Grid>
))}

 <Controls.Divider/>

        {categoriesTwo.map((category, index) => (
                    <Controls.Grid item xs={12} key={index} my={2}>
                        <Controls.Typography sx={{ fontWeight: "bold", mb: 1 ,color:"#4a657a",}}>{category.title}</Controls.Typography>
                        {category.items.map((item, idx) => (
                          <>
                          <Controls.Grid item sx={{display:"flex",marginLeft:3}}>
                            <Controls.Typography
                                key={idx}
                                onClick={() => {
                                    if (item.link) {
                                      navigate(item.link); 
                                      // closeMenu(); 
                                    }
                                  }}
                                sx={{
                                    mb: 0.5,
                                    color:"#6d6d6d",
                            fontWeight:"bold",
                            fontSize:"15px",
                                    cursor: item.link ? "pointer" : "default",
                                  //  '&:hover': item ? { textDecoration:"underline" } : {},
                                }}
                                // onClick={handleCategories}
                            >
                                {item.name}
                            </Controls.Typography></Controls.Grid>
                           </>
                        ))}
        </Controls.Grid>
        ))}
        </Controls.Grid>
                    </Controls.Grid>
                 </Controls.Grid>
                 <Controls.Grid item xs={12} sm={8}lg={9.5}>
                 {/* {view === "orders" && <MyOrdersComponent/>}
                 {view === "update-profile" && <MyProfileDetailsComponent/>} */}
                 <Outlet/>
                 
                 </Controls.Grid>
                 </Controls.Grid>
          </Controls.Grid>

        </Controls.Grid>
    </Controls.Grid>
    </>
  )
}

export default ProfileComponent