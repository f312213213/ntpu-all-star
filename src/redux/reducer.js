import { combineReducers } from 'redux'

import candidate from './candidate/reducer'
import user from './user/reducer'
import snackbar from './snackbar/reducer'
import app from './app/reducer'
import backdrop from './backdrop/reducer'

export default combineReducers({
  candidate,
  user,
  snackbar,
  app,
  backdrop
})
