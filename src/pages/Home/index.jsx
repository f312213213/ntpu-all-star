import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import actions from '../../redux/actions'
import { useUser } from '../../hooks/user'
import { ButtonBase } from '@mui/material'

const Home = () => {
  const dispatch = useDispatch()
  const user = useUser()
  const navigate = useNavigate()

  const clickHandler = () => {
    if (user.uid) {
      return navigate('/category')
    }
    return navigate('/login')
  }

  useEffect(() => {
    dispatch(actions.app.changeHelmet('首頁 | 北大明星賽 2022', '這是北大明星賽投票網站的首頁'))
  }, [])

  return (
      <div className={'Page'}>
        <div className={'PageContainer flex flex-col justify-center items-center space-y-8'}>
          <div>
            投票時間：3/31 12:00 ~ 4/8 23:30
          </div>
          <div className={'flex flex-col items-center space-y-3'}>
            <span>
              投票須知：
            </span>
            <span>
              1. 需使用學校配發之 @gm.ntpu.edu.tw 信箱登入
            </span>
            <span>
              2. 各球類與位置有不同票數，請留意你所處的位置。
            </span>
            <span>
              3. 投票完成後將無法更改，請確認投票正確。
            </span>
            <span>
              4. 點擊候選人的照片可以瀏覽完整的資訊。
            </span>
          </div>
          {
            <ButtonBase className={'bg-highLight p-4 rounded-xl text-white'} onClick={clickHandler}>前往投票</ButtonBase>
          }
        </div>
      </div>
  )
}

export default Home
