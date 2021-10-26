const authServices = require("../services/authServices");

async function login(req, res, next) {
  if (req.body.user === `user` && req.body.password === `0000`) {
    const authResponse = authServices.login();
    return res.json(authResponse);
  }
  res.status(401).end();
}

module.exports = { login };
