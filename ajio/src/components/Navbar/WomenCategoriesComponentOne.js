import React from 'react'
import Controls from '../../commons/Controls';
import { useNavigate } from 'react-router-dom';

const WomenCategoriesComponentOne = ({categories,categoriesTwo,categoriesThree,categoriesFour,closeMenu}) => {
    const navigate=useNavigate()
  return (
    <>
    <Controls.Grid item xs={12} p={3} sx={{display:"flex",}}>
            <Controls.Grid item xs={3}  sx={{}}>
        {categories.map((category, index) => (
            <>
            <Controls.Grid item xs={12} sx={{}}>
            <Controls.Grid item xs={12} key={index}>
                <Controls.Typography sx={{ fontWeight: "bold", mb: 1 }}>{category.title}</Controls.Typography>
                {category.womenOne.map((item, idx) => (
                    <Controls.Typography
                        key={idx}
                        onClick={() => {
                            if (item.link) {
                              navigate(item.link); 
                              closeMenu(); 
                            }
                          }}
                        sx={{
                            mb: 0.5,
                            fontWeight:'bold',
                            cursor: item ? "pointer" : "default",
                            
                        }}
                    >
                        {item}
                    </Controls.Typography>
                ))}
            </Controls.Grid>
            <Controls.Grid item xs={12} key={index}>
            <Controls.Typography sx={{ fontWeight: "bold", mb: 1 }}>{category.title}</Controls.Typography>
            {category.womenTwo.map((item, idx) => (
                <Controls.Typography
                    key={idx} 
                    sx={{
                        mb: 0.5,
                        fontSize:"13px",
                        fontWeight:'normal',
                        cursor: item ? "pointer" : "default",
                        '&:hover': item ? { textDecoration:"underline" } : {},
                    }}
                >
                    {item}
                </Controls.Typography>
            ))}
        </Controls.Grid>
        </Controls.Grid>
        </>
        ))}
        </Controls.Grid>
        <Controls.Grid item xs={3} >
        {categoriesTwo.map((category, index) => (
                    <Controls.Grid item xs={12} key={index} mb={2}>
                        <Controls.Typography sx={{ fontWeight: "bold", mb: 1 }}>{category.title}</Controls.Typography>
                        {category.items.map((item, idx) => (
                            <Controls.Typography
                                key={idx}
                                onClick={() => {
                                    if (item.link) {
                                      navigate(item.link); 
                                      closeMenu(); 
                                    }
                                  }}
                                sx={{
                                    mb: 0.5,
                                    fontSize:"13px",
                                    cursor: item.link ? "pointer" : "default",
                                   '&:hover': item ? { textDecoration:"underline" } : {},
                                }}
                            >
                                {item.name}
                            </Controls.Typography>
                        ))}
        </Controls.Grid>
        ))}
        </Controls.Grid>
        <Controls.Grid item xs={3} >
        {categoriesThree.map((category, index) => (
                    <Controls.Grid item xs={12} key={index} mb={2}>
                        <Controls.Typography sx={{ fontWeight: "bold", mb: 1 }}>{category.title}</Controls.Typography>
                        {category.items.map((item, idx) => (
                            <Controls.Typography
                                key={idx}
                                onClick={() => {
                                    if (item.link) {
                                      navigate(item.link); 
                                      closeMenu(); 
                                    }
                                  }}
                                sx={{
                                    mb: 0.5,
                                    fontSize:"13px",
                                    cursor: item.link ? "pointer" : "default",
                                   '&:hover': item ? { textDecoration:"underline" } : {},
                                }}
                            >
                                {item.name}
                            </Controls.Typography>
                        ))}
        </Controls.Grid>
        ))}
        </Controls.Grid>
        <Controls.Grid item xs={3} >
        {categoriesFour.map((category, index) => (
                    <Controls.Grid item xs={12} key={index} mb={2}>
                        <Controls.Typography sx={{ fontWeight: "bold", mb: 1 }}>{category.title}</Controls.Typography>
                        {category.items.map((item, idx) => (
                            <Controls.Typography
                                key={idx}
                                onClick={() => {
                                    if (item.link) {
                                      navigate(item.link); 
                                      closeMenu(); 
                                    }
                                  }}
                                sx={{
                                    mb: 0.5,
                                    fontSize:"13px",
                                    cursor: item.link ? "pointer" : "default",
                                    '&:hover': item ? { textDecoration:"underline" } : {},
                                }}
                            >
                                {item.name}
                            </Controls.Typography>
                        ))}
        </Controls.Grid>
        ))}
        </Controls.Grid>
        </Controls.Grid>
    </>
  )
}

export default WomenCategoriesComponentOne