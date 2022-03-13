import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import actions from '../../redux/actions'

function Ranking () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.app.changeHelmet('排行榜 | 北大明星賽 2022', '這是北大明星賽投票網站的排行榜'))
  })
  return (
      <div className={'Page'}>
        <div className={'PageContainer bg-custom-200'}>
        </div>
      </div>
  )
}

export default Ranking
