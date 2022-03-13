import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import actions from '../redux/actions'

const SEO = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const metaData = useSelector(state => state.app.helmet)

  useEffect(() => {
    if (metaData.title.indexOf('undefined') !== -1) {
      dispatch(actions.app.closeSnackbar())
      navigate('/')
    }
  }, [metaData])
  return (
      <Helmet>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
      </Helmet>
  )
}

export default SEO
