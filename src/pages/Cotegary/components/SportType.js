import React from 'react'
import { Link } from 'react-router-dom'

const SportType = ({ type, path }) => {
  return (
      <Link to={path}>
        <div className={'bg-custom-300 w-full text-center h-full flex items-center justify-center hover:bg-custom-200 transition'}>
          {type}
        </div>
      </Link>

  )
}

export default SportType
