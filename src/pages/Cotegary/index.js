import React from 'react'
import SportType from './components/SportType'

const Category = () => {
  return (
      <div className={'Page'}>
        <div className={'PageContainer flex flex-col justify-evenly overflow-hidden divide-y divide-gray-500 bg-custom-200'}>
          <SportType type={'籃球'} path={'basketball'} />
          <SportType type={'排球'} path={'volleyball'} />
        </div>
      </div>
  )
}

export default Category
