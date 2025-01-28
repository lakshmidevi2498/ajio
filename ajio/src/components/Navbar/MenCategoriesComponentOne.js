import React from 'react'
import Controls from '../../commons/Controls';

const MenCategoriesComponentOne = ({  handleCategories,categoriesFour,categoriesThree,categoriesTwo,categories,closeMenu,navigate}) => {
  return (
    <>
      <Controls.Grid item xs={3}  sx={{}}>
        {categories.map((category, index) => (
            <>
            <Controls.Grid item xs={12} sx={{}}>
            <Controls.Grid item xs={12} key={index}>
                <Controls.Typography sx={{ fontWeight: "bold", mb: 1 }}>{category.title}</Controls.Typography>
                {category.menOne.map((item, oneidx) => (
                    <Controls.Typography
                        key={oneidx} 
                        sx={{
                            mb: 0.5,
                            fontWeight:'bold',
                            cursor: item ? "pointer" : "default",
                            
                        }}
                        onClick={handleCategories}
                    >
                        {item}
                    </Controls.Typography>
                ))}
            </Controls.Grid>
            <Controls.Grid item xs={12} key={index}>
            <Controls.Typography sx={{ fontWeight: "bold", mb: 1 }}>{category.title}</Controls.Typography>
            {category.menTwo.map((item, twoidx) => (
                <Controls.Typography
                    key={twoidx} 
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
        <Controls.Grid item xs={12} key={index}>
            <Controls.Typography sx={{ fontWeight: "bold", mb: 1 }}>{category.title}</Controls.Typography>
            {category.menThree.map((item,threeidx) => (
                <Controls.Typography
                    key={threeidx} 
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
            {category.menFour.map((item, fouridx) => (
                <Controls.Typography
                    key={fouridx} 
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
    </>
  )
}

export default MenCategoriesComponentOne