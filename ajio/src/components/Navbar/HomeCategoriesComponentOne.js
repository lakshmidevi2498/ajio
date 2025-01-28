import React from 'react'
import Controls from '../../commons/Controls';
import { useNavigate } from 'react-router-dom';

const HomeCategoriesComponentOne = ({categories,categoriesTwo,categoriesThree,categoriesFour,closeMenu}) => {
    const navigate = useNavigate()
  return (
    <>
    <Controls.Grid item xs={3} >
                        {categories.map((category, index) => (
                            <Controls.Grid item xs={12} key={index}>

                                <Controls.Typography sx={{ fontWeight: "bold", mb: 1 }}>
                                    {category.title}
                                </Controls.Typography>


                                {category.kidOne && (
                                    <Controls.Grid item xs={12}>
                                        {category.kidOne.map((item, idx) => (
                                            <Controls.Typography
                                                key={idx}
                                                sx={{
                                                    mb: 0.5,
                                                    fontSize: "13px",
                                                    fontWeight: "bold",
                                                    cursor: item ? "pointer" : "default",
                                                }}
                                             
                                            >
                                                {item}
                                            </Controls.Typography>
                                        ))}
                                    </Controls.Grid>
                                )}

                                {category.items && (
                                    <Controls.Grid item xs={12}>
                                        {category.items.map((item, idx) => (
                                            <Controls.Typography
                                                key={idx}
                                                sx={{
                                                    mb: 0.5,
                                                    fontSize: "13px",
                                                    cursor: "pointer",
                                                    '&:hover': item ? { textDecoration: "underline" } : {},
                                                }}
                                                onClick={() => {
                                                    if (item.link) {
                                                      navigate(item.link); 
                                                      closeMenu(); 
                                                    }
                                                  }}
                                            >
                                                {item.name}
                                            </Controls.Typography>
                                        ))}
                                    </Controls.Grid>
                                )}
                            </Controls.Grid>
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
                                        fontSize: "13px",
                                        cursor: item.link ? "pointer" : "default",
                                        '&:hover': item ? { textDecoration: "underline" } : {},
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
                            {category.title && (
                                <Controls.Typography sx={{ fontWeight: "bold", mb: 1 }}>
                                    {category.title}
                                </Controls.Typography>
                            )} 
                            {category.items &&
                                category.items.map((item, idx) => (
                                    <Controls.Typography
                                        key={`item-${index}-${idx}`}
                                        sx={{
                                            mb: 0.5,
                                            fontSize: "13px",
                                            cursor: "pointer",
                                            "&:hover": { textDecoration: "underline" },
                                        }}
                                        onClick={() => {
                                            if (item.link) {
                                              navigate(item.link); 
                                              closeMenu(); 
                                            }
                                          }}
                                    >
                                        {item.name}
                                    </Controls.Typography>
                                ))}

                         
                            {category.kid &&
                                category.kid.map((item, idx) => (
                                    <Controls.Typography
                                        key={`kid-${index}-${idx}`}
                                        sx={{
                                            mb: 0.5,
                                            fontWeight: "bold",
                                            cursor: "pointer",
                                        }}
                                    >
                                        {item}
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
                                        fontSize: "13px",
                                        cursor: item.link ? "pointer" : "default",
                                        '&:hover': item ? { textDecoration: "underline" } : {},
                                    }}
                                >
                                    {item.name}
                                </Controls.Typography>
                            ))}
                        </Controls.Grid>
                    ))}
                </Controls.Grid>
    </>
  )
}

export default HomeCategoriesComponentOne