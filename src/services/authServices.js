const jwt = require(`jsonwebtoken`);
const SECRET = `mysecret`;

function login() {
  const token = jwt.sign({ usedID: 1 }, SECRET, { expiresIn: 600 });
  return { Authentication: true, token };
}

module.exports = { login };
