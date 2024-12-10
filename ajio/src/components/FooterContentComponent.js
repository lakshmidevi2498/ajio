import React from 'react'
import Controls from '../commons/Controls'

const FooterContentComponent = ({contentOne,contentTwo,contentThree ,contentFour}) => {
  return (
    <>
    <Controls.Grid container spacing={2} sx={{ display: { xs: "block", sm: 'flex' }, justifyContent: { xs: "", sm: 'space-between' }, borderBottom: "2px solid lightgray", paddingBottom: 5 }}>
        <Controls.Grid item>
        <Controls.Grid item xs={12} sm={3} sx={{ textAlign: { xs: "center", } }}>
                {contentOne.map((content, index) => (
                  <Controls.Grid item xs={12} key={index} sx={{}}>
                    <Controls.Typography sx={{ fontSize: "14px", mb: 1, fontFamily: "poppins" }}>
                      {content.title}
                    </Controls.Typography>
                    {content.items && (
                      <Controls.Grid item xs={12}>
                        {content.items.map((item, idx) => (
                          <Controls.Typography
                            key={idx}
                            sx={{
                              mb: 0.5,
                              fontSize: "14px",
                              fontFamily: "poppins",
                              cursor: item ? "pointer" : "default",
                              '&:hover': { textDecoration: "underline" }
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
              <Controls.Grid item xs={12} sm={3} sx={{ textAlign: { xs: "center", } }}>
                {contentTwo.map((content, index) => (
                  <Controls.Grid item xs={12} key={index}>
                    <Controls.Typography sx={{ fontSize: "14px", mb: 1, fontFamily: "poppins" }}>
                      {content.title}
                    </Controls.Typography>
                    {content.items && (
                      <Controls.Grid item xs={12}>
                        {content.items.map((item, idx) => (
                          <Controls.Typography
                            key={idx}
                            sx={{
                              mb: 0.5,
                              fontSize: "14px",
                              fontFamily: "poppins",
                              cursor: item ? "pointer" : "default",
                              '&:hover': { textDecoration: "underline" }
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
              <Controls.Grid item xs={12} sm={3} sx={{ textAlign: { xs: "center", } }}>
                {contentThree.map((content, index) => (
                  <Controls.Grid item xs={12} key={index}>
                    <Controls.Typography sx={{ fontSize: "14px", mb: 1, fontFamily: "poppins" }}>
                      {content.title}
                    </Controls.Typography>
                    {content.items && (
                      <Controls.Grid item xs={12}>
                        {content.items.map((item, idx) => (
                          <Controls.Typography
                            key={idx}
                            sx={{
                              mb: 0.5,
                              fontSize: "14px",
                              fontFamily: "poppins",
                              cursor: item ? "pointer" : "default",
                              '&:hover': { textDecoration: "underline" }
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
              <Controls.Grid item xs={12} sm={3} sx={{ textAlign: { xs: "center", } }}>
                {contentFour.map((content, index) => (
                  <Controls.Grid item xs={12} key={index}>
                    <Controls.Typography sx={{ fontSize: "14px", mb: 1, fontFamily: "poppins" }}>
                      {content.title}
                    </Controls.Typography>
                    {content.items && (
                      <Controls.Grid item xs={12}>
                        {content.items.map((item, idx) => (
                          <Controls.Typography
                            key={idx}
                            sx={{
                              mb: 0.5,
                              fontSize: "14px",
                              fontFamily: "poppins",
                              cursor: item ? "pointer" : "default",
                              '&:hover': { textDecoration: "underline" }
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
        </Controls.Grid>
    </Controls.Grid>
    </>
  )
}

export default FooterContentComponent