import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './Home'
import Category from './Cotegary'
import Login from './Login'
import SportPage from './SportPage'
import Ranking from './Ranking'

const AppRouter = () => {
  return (
      <Routes>
        <Route path={'/category/:sportType'} exact element={<SportPage />} />
        <Route path={'/category'} exact element={<Category />} />
        <Route path={'/login'} exact element={<Login />} />
        <Route path={'ranking'} exact element={<Ranking />} />
        <Route path={'/'} exact element={<Home />} />
        <Route path={'*'} element={<Navigate to="/" />} />
      </Routes>
  )
}

export default AppRouter
