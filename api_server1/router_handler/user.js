const db = require('../db/index')

exports.regUser = (req, res) => {
  // 获取提交到客户端的用户信息
  const userinfo = req.body
  if (!userinfo.username || !userinfo.password) {
    return res.send({
      status: 1,
      message:'账号密码不正确'
    })
  }
  // 定义sql语句
  const sql = `select*from ev_users where username=?`
  // 执行sql语句并根据结果判断用户是否被占用
  db.query(sql, userinfo.username, (err, results) => {
    if (err) {
      return res.send({
        status: 1,
        message:err.message
      })
    }
    if (results.length > 0) {
      return res.send({
        status: 1,
        message:'用户名被占用'
      })
    }
    console.log(userinfo)
    userinfo.password = bcrypt.hashSync(userinfo.password, 10)
    console.log(userinfo)
    res.send('reguser OK')
  })
}

exports.login = (req, res) => {

  res.send('login OK')
}

