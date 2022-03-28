import ActionTypes from './ActionTypes'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

import { collection, getDocs, getFirestore, query, orderBy } from 'firebase/firestore'

import { firebaseConfig } from '../../config/firebaseConfig'
import actions from '../actions'
import CandidateDialog from '../../components/CandidateDialog'

export const appInit = () => {
  const app = initializeApp(firebaseConfig)
  getAnalytics(app)
  return {
    type: ActionTypes.APP_INIT,
    payload: app
  }
}

export const changeHelmet = (type, message) => ({
  type: ActionTypes.CHANGE_HELMET,
  payload: {
    title: type,
    description: message
  }
})

export const showSnackbar = (type, message) => ({
  type: ActionTypes.SHOW_SNACKBAR,
  payload: {
    snackbarType: type,
    snackbarMessage: message
  }
})

export const closeSnackbar = () => ({
  type: ActionTypes.CLOSE_SNACKBAR
})

export const showConfirmDialog = (message, title, onConfirm) => ({
  type: ActionTypes.SHOW_CONFIRM,
  payload: {
    message: message,
    title: title,
    onConfirm: onConfirm
  }
})

export const closeConfirmDialog = () => ({
  type: ActionTypes.CLOSE_CONFIRM
})

export const showCandidateDialog = (introduction, username, photoURL, voteCount, onConfirm) => ({
  type: ActionTypes.SHOW_CANDIDATE,
  payload: {
    introduction: introduction,
    username: username,
    photoURL: photoURL,
    voteCount: voteCount,
    onConfirm: onConfirm
  }
})

export const closeCandidateDialog = () => ({
  type: ActionTypes.CLOSE_CANDIDATE
})

export const showBackdrop = () => ({
  type: ActionTypes.SHOW_BACKDROP
})

export const closeBackdrop = () => ({
  type: ActionTypes.CLOSE_BACKDROP
})

export const getSportPageData = (dispatch, sportType, setCandidates, setCopy) => async () => {
  dispatch(actions.app.showBackdrop())
  setTimeout(async () => {
    setCandidates([])
    const tempArray = []
    const db = getFirestore()
    let pathName
    if (sportType === 'basketballFemale' || sportType === 'basketballMale') {
      pathName = sportType === 'basketballFemale' ? 'basketball/female/candidates' : 'basketball/male/candidates'
    } else if (sportType.indexOf('volleyballMale') !== -1) {
      pathName = `volleyball/male/${sportType?.substring(14)?.toLowerCase()}`
    } else if (sportType.indexOf('volleyballFemale') !== -1) {
      pathName = `volleyball/female/${sportType?.substring(16)?.toLowerCase()}`
    }

    const q = query(collection(db, pathName), orderBy('voteCount', 'desc'))

    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      tempArray.push({ id: doc.id, data: doc.data() })
    })

    setTimeout(() => {
      setCopy(tempArray)
      setCandidates(tempArray)
    }, 500)
    dispatch(actions.app.closeBackdrop())
  }, 1000)
  window.gtag('event', 'load_' + sportType + 'Page', {
    event_category: 'load',
    event_label: sportType
  })
}
