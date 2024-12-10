import React from 'react'
import Controls from '../commons/Controls'
import { useNavigate } from 'react-router-dom'

const ProfileComponent = () => {
  const navigate = useNavigate()
    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/')

      }
  return (
    <>
    <Controls.Grid container justifyContent="center">
        <Controls.Grid item sx={{display:"block"}}>
            <Controls.Typography variant='h2'>This is profile page</Controls.Typography>
        </Controls.Grid>
        <Controls.Grid item sx={{display:"block"}}>
        <Controls.Button variant='outlined' onClick={handleLogout}>logout</Controls.Button>
        </Controls.Grid>
    </Controls.Grid>
    </>
  )
}

export default ProfileComponent