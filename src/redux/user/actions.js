import { doc, getDoc, increment, setDoc, updateDoc } from 'firebase/firestore'
import { getAuth, getRedirectResult, signOut } from 'firebase/auth'

import ActionTypes from './ActionTypes'
import actions from '../actions'

export const userLogin = (user) => {
  return {
    type: ActionTypes.USER_LOGIN,
    payload: user
  }
}

export const userLogout = (dispatch) => {
  const auth = getAuth()
  signOut(auth)
  setTimeout(() => {
    dispatch(actions.backdrop.closeBackdrop())
    dispatch(actions.snackbar.showSnackbar('success', '成功登出！'))
  }, 500)

  return {
    type: ActionTypes.USER_LOGOUT
  }
}

export const userUpdate = (user) => {
  return {
    type: ActionTypes.USER_UPDATE,
    payload: user
  }
}

export const userVote = (dispatch, sportCount, localUser, db, pathName, id, setCount, count) => async () => {
  dispatch(actions.backdrop.showBackdrop())
  dispatch(actions.user.userUpdate({
    ...localUser,
    [sportCount]: localUser[sportCount] + 1,
    voteCount: localUser.voteCount + 1,
    voted: [...localUser.voted, id]
  }))

  const currentCardRef = doc(db, pathName, id)
  await updateDoc(currentCardRef, {
    voteCount: increment(1)
  })
  await updateDoc(doc(db, 'user', localUser.uid), {
    [sportCount]: increment(1),
    voteCount: increment(1),
    voted: [...localUser.voted, id]
  })
  getDoc(doc(db, 'user', localUser.uid))
    .then((firestoreDoc) => {
      dispatch(actions.user.userLogin(firestoreDoc.data()))
    })
  window.gtag('event', 'vote', {
    event_category: 'vote',
    event_label: id
  })
  setCount(count + 1)
  dispatch(actions.snackbar.showSnackbar('success', '投票成功！'))
  dispatch(actions.backdrop.closeBackdrop())
}
