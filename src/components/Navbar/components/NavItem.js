import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({ text, path }) => {
  return (
      <Link to={path}>
        <div>
          {text}
        </div>
      </Link>
  )
}

export default NavItem
