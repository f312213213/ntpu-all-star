import React from 'react'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import { useSelector } from 'react-redux'

const BackdropC = () => {
  const open = useSelector(state => state.app.backdrop)
  return (
      <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
  )
}

export default BackdropC
