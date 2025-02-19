import React, { useState, useEffect } from 'react';
import Controls from '../commons/Controls'

const ReusableImageComponent = ({data}) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        if (data?.images) {
          setImages(data.images);
        }
      }, [data]);
  return (
    <>
  
        <Controls.Grid item xs={12}>
            <Controls.Box component='img'   src={images[0]}  width="100%" height="100%" sx={{ transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.01)',
                                    },}}/>
        </Controls.Grid>

 
    </>
  )
}

export default ReusableImageComponent