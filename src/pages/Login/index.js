import React, { useEffect } from 'react'
import { getAuth, signInWithRedirect, GoogleAuthProvider, getRedirectResult } from 'firebase/auth'
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import actions from '../../redux/actions'
import { useUser } from '../../hooks/user'

const Login = () => {
  const auth = getAuth()
  const provider = new GoogleAuthProvider()
  const dispatch = useDispatch()
  const userLocal = useUser()
  const db = getFirestore()
  const navigate = useNavigate()

  const handleClick = () => {
    dispatch(actions.backdrop.showBackdrop())
    signInWithRedirect(auth, provider)
  }

  const checkLogin = async () => {
    dispatch(actions.backdrop.showBackdrop())
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
              vbEdgeLineVC: 0,
              vbLiberoVC: 0,
              vbSetterVC: 0,
              vbSpikerVC: 0,
              vgSetterVC: 0,
              vgEdgeLineVC: 0,
              bbVC: 0,
              bgVC: 0,
              voted: []
            }
            setDoc(doc(db, 'user', result.user.uid), newUserData)
            dispatch(actions.user.userLogin(newUserData))
            window.gtag('event', 'login', {
              method: 'Google'
            })
          })
        dispatch(actions.snackbar.showSnackbar('success', '登入成功！'))
        dispatch(actions.backdrop.closeBackdrop())
        return navigate('/category')
      } else {
        dispatch(actions.snackbar.showSnackbar('error', '這不是北大的信箱！'))
      }
    }
    dispatch(actions.backdrop.closeBackdrop())
  }

  useEffect(() => {
    checkLogin()
  }, [])

  useEffect(() => {
    dispatch(actions.helmet.changeHelmet('登入 | 北大明星賽 2022', '這是登入北大明星賽投票網站的頁面'))
  })

  return (
      <div className={'Page'}>
        <div className={'PageContainer bg-custom-200 flex justify-center items-center'}>
          {
            !userLocal.displayName &&
              <button onClick={handleClick} className={'bg-custom-900 text-custom-200 px-4 py-2 rounded-2xl hover:bg-custom-700 transition'}>
                用學校發的google帳號登入
              </button>
          }
        </div>
      </div>
  )
}

export default Login
