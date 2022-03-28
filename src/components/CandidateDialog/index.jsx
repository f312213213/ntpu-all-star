import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../redux/actions'

function CandidateDialog () {
  const candidateDialogStatus = useSelector(state => state.app.candidateDialog)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(actions.app.closeCandidateDialog())
  }

  const handleConfirm = () => {
    candidateDialogStatus.onConfirm()
    dispatch(actions.app.closeCandidateDialog())
  }

  return (
      <div>
        <Dialog
            open={candidateDialogStatus.show}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {candidateDialogStatus.username}
          </DialogTitle>
          <DialogContent>
            <img className="h-1/2" src={candidateDialogStatus.photoLink || candidateDialogStatus.photoURL} alt={candidateDialogStatus.introduction} />

            <DialogContentText id="alert-dialog-description">
              {candidateDialogStatus.introduction}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>
              取消
            </Button>
            <Button onClick={handleConfirm}>
              投給我！
            </Button>
          </DialogActions>
        </Dialog>
      </div>
  )
}

export default CandidateDialog
