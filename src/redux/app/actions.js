import ActionTypes from './ActionTypes'
import { initializeApp } from 'firebase/app'

import { firebaseConfig } from '../../config/firebaseConfig'

export const appInit = () => {
  return {
    type: ActionTypes.APP_INIT,
    payload: initializeApp(firebaseConfig)
  }
}
