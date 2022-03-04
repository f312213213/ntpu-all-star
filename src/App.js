import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import store from './redux/store'
import Main from './pages/Main'

const App = () => {
  /*
  * TODO
  * @gm.ntpu.edu.tw 信箱登入
  * 排行榜 顯示多少票
  * 投票 照片 簡介
  * 一人兩票
  * 籃球
  *
  */

  return (
    <Provider store={store}>
      <Router>
        <Main />
      </Router>
    </Provider>
  )
}

export default App
