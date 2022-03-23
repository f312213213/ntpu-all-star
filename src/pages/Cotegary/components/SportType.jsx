import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonBase } from '@mui/material'

const SportType = ({ type, path }) => {
  return (
      <Link to={path}>
        <ButtonBase className={' w-full text-center h-full flex items-center justify-center hover:bg-custom-300 dark:hover:bg-custom-600 hover:text-lg transition'} onClick={() => {
          window.gtag('event', 'view_' + type, {
            event_category: 'view',
            event_label: 'view_' + type
          })
        }}>
          {type}
        </ButtonBase>
      </Link>

  )
}

export default SportType
