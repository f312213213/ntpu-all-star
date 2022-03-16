import React from 'react'
import { Skeleton } from '@mui/material'

function CardLoader () {
  return (
      <div className={'w-full h-96 rounded flex flex-col space-y-4 items-center shadow-lg dark:bg-custom-400 bg-custom-200 relative'}>
        <Skeleton variant="rectangular" width={210} height={190} />
        <Skeleton variant="rectangular" width={100} height={25} />
        <Skeleton variant="rectangular" width={180} height={20} />
        <div className={'px-6 flex justify-evenly items-center space-x-4 absolute bottom-4'}>
          <Skeleton variant="rectangular" width={100} height={40} />
          <Skeleton variant="rectangular" width={100} height={25} />
        </div>
      </div>
  )
}

export default CardLoader
