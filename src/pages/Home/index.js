import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import actions from '../../redux/actions'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.helmet.changeHelmet('首頁 | 北大明星賽 2022', '這是北大明星賽投票網站的首頁'))
  })

  return (
      <div className={'Page'}>
        <div className={'PageContainer bg-custom-200 flex justify-center items-center'}>
          這是首頁
        </div>
      </div>
  )
}

export default Home
