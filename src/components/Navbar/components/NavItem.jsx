import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import actions from '../../../redux/actions'

const NavItem = ({ text, path }) => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(actions.backdrop.showBackdrop())
    dispatch(actions.user.userLogout(dispatch))
  }
  if (text === '登出') {
    return (
        <Link to={path}>
          <div onClick={handleLogout}>
            {text}
          </div>
        </Link>
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
