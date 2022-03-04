import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Category from './Cotegary'
import Login from './Login'
import SportPage from './SportPage'

const AppRouter = () => {
  return (
      <Routes>
        <Route path={'/category/:sportType'} exact element={<SportPage />} />
        <Route path={'/category'} exact element={<Category />} />
        <Route path={'/login'} exact element={<Login />} />
        <Route path={'/'} exact element={<Home />} />
      </Routes>
  )
}

export default AppRouter
