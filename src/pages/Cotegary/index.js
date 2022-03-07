import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import actions from '../../redux/actions'
import SportType from './components/SportType'

const Category = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.helmet.changeHelmet('選擇球類 | 北大明星賽 2022', '這是北大明星賽投票網站的投票入口'))
  })

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
