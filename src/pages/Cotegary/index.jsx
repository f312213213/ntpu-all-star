import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import actions from '../../redux/actions'
import SportType from './components/SportType'

const Category = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.app.changeHelmet('選擇球類 | 北大明星賽 2022', '這是北大明星賽投票網站的投票入口'))
  })

  return (
      <div className={'Page'}>
        <div className={'PageContainer flex flex-col justify-evenly overflow-hidden divide-y divide-gray-500 bg-custom-200'}>
          <SportType type={'男籃'} path={'basketballMale'} />
          <SportType type={'女籃'} path={'basketballFemale'} />
          <SportType type={'男排-舉球員'} path={'volleyballMaleSetter'} />
          <SportType type={'男排-自由球員'} path={'volleyballMaleLibero'} />
          <SportType type={'男排-快攻手'} path={'volleyballMaleSpiker'} />
          <SportType type={'男排-邊線'} path={'volleyballMaleEdgeLine'} />
          <SportType type={'女排-舉球員'} path={'volleyballFemaleSetter'} />
          <SportType type={'女排-邊線'} path={'volleyballFemaleEdgeLine'} />
        </div>
      </div>
  )
}

export default Category
