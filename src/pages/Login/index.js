import React, { useEffect } from 'react'
import { getAuth, signInWithRedirect, GoogleAuthProvider, getRedirectResult } from 'firebase/auth'
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'
import { useDispatch } from 'react-redux'

import actions from '../../redux/actions'
import { useUser } from '../../hooks/user'

const Login = () => {
  const auth = getAuth()
  const provider = new GoogleAuthProvider()
  const dispatch = useDispatch()
  const userLocal = useUser()
  const db = getFirestore()

  const handleClick = () => {
    signInWithRedirect(auth, provider)
  }

  const checkLogin = async () => {
    const result = await getRedirectResult(auth)
    if (result) {
      if (result.user.email.includes('gm.ntpu.edu.tw')) {
        getDoc(doc(db, 'user', result.user.uid))
          .then((firestoreDoc) => {
            dispatch(actions.user.userLogin(firestoreDoc.data()))
          })
          .catch(() => {
            const newUserData = {
              displayName: result.user.displayName,
              email: result.user.email,
              uid: result.user.uid,
              photoURL: result.user.photoURL,
              voteCount: 0,
              voted: []
            }
            setDoc(doc(db, 'user', result.user.uid), newUserData)
            dispatch(actions.user.userLogin(newUserData))
          })

        dispatch(actions.snackbar.showSnackbar('success', '登入成功！'))
      } else {
        dispatch(actions.snackbar.showSnackbar('alert', '這不是北大的信箱！'))
      }
    }
  }

  useEffect(() => {
    checkLogin()
  }, [])

  return (
      <div className={'Page'}>
        <div className={'PageContainer bg-custom-200 flex justify-center items-center'}>
          {
            !userLocal.displayName && <div onClick={handleClick}>
                用google登入
              </div>
          }
        </div>
      </div>
  )
}

export default Login
