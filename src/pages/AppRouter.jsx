import React, { useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'

import Home from './Home'
import Category from './Cotegary'
import Login from './Login'
import SportPage from './SportPage'
import actions from '../redux/actions'
import { getAuth, getRedirectResult } from 'firebase/auth'
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'
import { useDispatch } from 'react-redux'

const AppRouter = () => {
  const auth = getAuth()
  const dispatch = useDispatch()
  const db = getFirestore()
  const navigate = useNavigate()

  const checkLogin = async () => {
    dispatch(actions.app.showBackdrop())
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
          })
        dispatch(actions.app.showSnackbar('success', '登入成功！'))
        dispatch(actions.app.closeBackdrop())
        return navigate('/category')
      } else {
        dispatch(actions.app.closeBackdrop())
        return dispatch(actions.app.showSnackbar('error', '這不是北大的信箱！'))
      }
    }
    const sessionLogin = sessionStorage.getItem('firebase:authUser:AIzaSyAw47N9iPvLb8RZUcSV6_BfIt9rF-veQh0:[DEFAULT]')
    if (sessionLogin) {
      const loginJson = JSON.parse(sessionLogin)
      if (!loginJson.email.includes('gm.ntpu.edu.tw')) {
        dispatch(actions.app.showSnackbar('error', '這不是北大的信箱！'))
        return dispatch(actions.app.closeBackdrop())
      }
      getDoc(doc(db, 'user', loginJson.uid))
        .then((firestoreDoc) => {
          dispatch(actions.user.userLogin(firestoreDoc.data()))
        })
      dispatch(actions.app.showSnackbar('success', '登入成功！'))
      return dispatch(actions.app.closeBackdrop())
    }
    dispatch(actions.app.closeBackdrop())
  }

  useEffect(() => {
    checkLogin()
  }, [])
  return (
      <Routes>
        <Route path={'/category/:sportType'} exact element={<SportPage />} />
        <Route path={'/category'} exact element={<Category />} />
        <Route path={'/login'} exact element={<Login />} />
        <Route path={'/'} exact element={<Home />} />
        <Route path={'*'} element={<Navigate to="/" />} />
      </Routes>
  )
}

export default AppRouter
