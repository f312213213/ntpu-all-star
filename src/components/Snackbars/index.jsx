import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Snackbar, Alert } from '@mui/material'

import actions from '../../redux/actions'

const Snackbars = () => {
  const dispatch = useDispatch()
  const snackbar = useSelector(state => state.app.snackbar)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    dispatch(actions.app.closeSnackbar())
  }

  return (
      <Snackbar open={snackbar.show} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={snackbar.type} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
  )
}

export default Snackbars
