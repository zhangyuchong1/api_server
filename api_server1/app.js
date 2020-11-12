const express = require('express')
const app = express()
const cors=require('cors')
app.use(cors)
app.use(express.urlencoded({ extended: false }))

// 导入并注册路由模块
app.use('/api',require('./router/user'))

app.listen(8000, () => {
  console.log('api server running at http://127.0.0.1')
})