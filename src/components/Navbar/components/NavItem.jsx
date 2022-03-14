import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import actions from '../../../redux/actions'

const NavItem = ({ text, path }) => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(actions.app.showBackdrop())
    dispatch(actions.user.userLogout(dispatch))
  }

  const confirmLogout = async () => {
    dispatch(actions.app.showConfirmDialog('88', '確定登出嗎', handleLogout))
  }

  if (text === '登出') {
    return (
        <>
          <div onClick={confirmLogout} className={'cursor-pointer'}>
            {text}
          </div>
        </>
    )
  }
  return (
      <Link to={path}>
        <div>
          {text}
        </div>
      </Link>
  )
}

export default NavItem
