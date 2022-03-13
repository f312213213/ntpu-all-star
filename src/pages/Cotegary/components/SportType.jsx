import React from 'react'
import { Link } from 'react-router-dom'

const SportType = ({ type, path }) => {
  return (
      <Link to={path}>
        <div className={'bg-custom-200 w-full text-center h-full flex items-center justify-center hover:bg-custom-300 hover:text-lg transition'} onClick={() => {
          window.gtag('event', 'view_' + type, {
            event_category: 'view',
            event_label: 'view_' + type
          })
        }}>
          {type}
        </div>
      </Link>

  )
}

export default SportType
