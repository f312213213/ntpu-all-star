import React from 'react'

import AppRouter from './AppRouter'
import Snackbar from '../components/Snackbars'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useDispatch } from 'react-redux'
import actions from '../redux/actions'
import BackdropC from '../components/Backdrop'
import SEO from './SEO'
import AlertDialog from '../components/AlertDialog'

const Main = () => {
  const dispatch = useDispatch()
  dispatch(actions.app.appInit())
  return (
      <>
        <SEO />
        <BackdropC />
        <Navbar />
        <Snackbar />
        <AppRouter />
        <AlertDialog />
        <Footer />
      </>
  )
}

export default Main
