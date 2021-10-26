const jwt = require(`jsonwebtoken`);
const SECRET = `mysecret`;

//Função de verificação do token
function verifyToken(req, res, next) {
  const token = req.query[`x-access-token`];
  jwt.verify(token, SECRET, (error, decoded) => {
    if (error) {
      return res.status(401).end();
    }
    req.userID = decoded.userID;
    next();
  });
}

module.exports = verifyToken;
