import React from 'react'
import { Skeleton } from '@mui/material'

function CardLoader () {
  return (
      <div className={'w-full h-96 rounded flex flex-col space-y-4 items-center shadow-lg bg-gray-500'}>
        <Skeleton variant="rectangular" width={210} height={190} />
        <Skeleton variant="rectangular" width={100} height={25} />
        <Skeleton variant="rectangular" width={180} height={20} />
        <Skeleton variant="rectangular" width={100} height={25} />
      </div>
  )
}

export default CardLoader
