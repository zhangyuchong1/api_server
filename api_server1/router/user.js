const express = require('express')
const router = express.Router()
const userHandle = require('../router_handler/user')
// 注册
router.post('/reguser', userHandle.regUser)

// 登录
router.post('/login', userHandle.login)

// 共享路由
module.exports=router