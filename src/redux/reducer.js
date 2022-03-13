import { combineReducers } from 'redux'

import candidate from './candidate/reducer'
import user from './user/reducer'
import app from './app/reducer'

export default combineReducers({
  candidate,
  user,
  app
})
