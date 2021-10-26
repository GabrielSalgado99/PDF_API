const express = require(`express`);
const router = express.Router();
const authController = require("../controllers/authController");

//Página de login que libera o token
router.post(`/login`, authController.login);

module.exports = router;