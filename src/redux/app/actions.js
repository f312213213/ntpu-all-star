import ActionTypes from './ActionTypes'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

import { collection, getDocs, getFirestore } from 'firebase/firestore'

import { firebaseConfig } from '../../config/firebaseConfig'
import actions from '../actions'

export const appInit = () => {
  const app = initializeApp(firebaseConfig)
  getAnalytics(app)
  return {
    type: ActionTypes.APP_INIT,
    payload: app
  }
}

export const getSportPageData = (dispatch, sportType, setCandidates, setCopy) => async () => {
  dispatch(actions.backdrop.showBackdrop())
  setTimeout(async () => {
    setCandidates([])
    const tempArray = []
    const db = getFirestore()
    const querySnapshot = await getDocs(collection(db, sportType))
    querySnapshot.forEach((doc) => {
      tempArray.push({ id: doc.id, data: doc.data() })
    })
    setCandidates(tempArray)
    setCopy(tempArray)
    dispatch(actions.backdrop.closeBackdrop())
  }, 1000)
  window.gtag('event', 'load_' + sportType + 'Page', {
    event_category: 'load',
    event_label: sportType
  })
}
