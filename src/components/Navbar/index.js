import React from 'react'
import NavItems from './components/NavItems'

const Navbar = () => {
  return (
      <nav className={'flex justify-around items-center w-full top-0 fixed bg-custom-800 p-4 text-custom-200 z-10'}>
        <NavItems />
      </nav>
  )
}

export default Navbar
