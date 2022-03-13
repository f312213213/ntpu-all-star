# 北大明星賽 2022

## 這是什麼？
這是用來選出2022年度北大明星賽的投票系統。
## 如何使用？
使用者必須以臺北大學配發之 @gm.ntpu.edu.tw 信箱登入系統後方可使用。

想在 local 玩的話可以 clone 下來之後接到自己的 firebase 專案裡。
> 在 src/config 裡新增一個檔案 firebaseConfig.js 並把 firebase 給的設定參數貼進去，並 export 出來即可以接上全新的資料庫

> notice:需要先至 firebase 專案裡開啟各項功能
```js
// src/config/firebaseConfig.js
export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: ''
}
```