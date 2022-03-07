import ActionTypes from './ActionTypes'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

import { firebaseConfig } from '../../config/firebaseConfig'

export const appInit = () => {
  const app = initializeApp(firebaseConfig)
  getAnalytics(app)
  return {
    type: ActionTypes.APP_INIT,
    payload: app
  }
}
