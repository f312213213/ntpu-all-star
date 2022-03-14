import React, { useEffect } from 'react'
import { getAuth, signInWithRedirect, GoogleAuthProvider, browserSessionPersistence, setPersistence } from 'firebase/auth'
import { useDispatch } from 'react-redux'

import actions from '../../redux/actions'
import { useUser } from '../../hooks/user'

const Login = () => {
  const auth = getAuth()
  const dispatch = useDispatch()
  const provider = new GoogleAuthProvider()
  const userLocal = useUser()

  const handleClick = () => {
    dispatch(actions.app.showBackdrop())
    setPersistence(auth, browserSessionPersistence)
      .then(() => signInWithRedirect(auth, provider))
  }

  useEffect(() => {
    dispatch(actions.app.changeHelmet('登入 | 北大明星賽 2022', '這是登入北大明星賽投票網站的頁面'))
  })

  return (
      <div className={'Page'}>
        <div className={'PageContainer bg-custom-200 flex justify-center items-center'}>
          {
            !userLocal.displayName &&
              <button onClick={handleClick} className={'bg-custom-1000 text-custom-200 px-4 py-2 rounded-2xl hover:bg-custom-700 transition'}>
                用學校發的google帳號登入
              </button>
          }
        </div>
      </div>
  )
}

export default Login
