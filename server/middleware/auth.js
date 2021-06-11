const { User } = require("../models/User");

let auth = (req, res, next) => {
  //인증처리
  //쿠키 에서 토큰
  let token = req.cookies.x_auth;
  //토큰 복호화 후 유저 찾기
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });

    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
