import React from 'react'
import NavItem from './NavItem'

const NavItems = () => {
  return (
      <>
        <NavItem path={'/'} text={'首頁'} />
        <NavItem path={'/category'} text={'球類選擇'} />
        <NavItem path={'/login'} text={'登入'} />
      </>
  )
}

export default NavItems
