import React from 'react'

import NavItem from './NavItem'
import { useUser } from '../../../hooks/user'

const NavItems = () => {
  const user = useUser()
  return (
      <>
        <NavItem path={'/'} text={'首頁'} />
        <NavItem path={'/category'} text={'球類選擇'} />
        {!user.displayName ? <NavItem path={'/login'} text={'登入'} /> : <NavItem path={'/'} text={'登出'} />}
      </>
  )
}

export default NavItems
