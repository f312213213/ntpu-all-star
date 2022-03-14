import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../redux/actions'

function AlertDialog () {
  const alertDialogStatus = useSelector(state => state.app.alertDialog)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(actions.app.closeConfirmDialog())
  }

  const handleConfirm = () => {
    alertDialogStatus.onConfirm()
    dispatch(actions.app.closeConfirmDialog())
  }

  return (
      <div>
        <Dialog
            open={alertDialogStatus.show}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {alertDialogStatus.title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {alertDialogStatus.message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>取消</Button>
            <Button onClick={handleConfirm} autoFocus>
              確認
            </Button>
          </DialogActions>
        </Dialog>
      </div>
  )
}

export default AlertDialog
