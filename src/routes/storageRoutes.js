const express = require(`express`);
const router = express.Router();
const storageController = require("../controllers/storageController");

const multer = require(`multer`);
const upload = require("../middlewares/storageMiddleware");
const verifyToken = require("../middlewares/authMiddleware");

//Página de upload de arquivos
router.get(`/uploadfile`, verifyToken, storageController.uploadFile);

//Método para fazer o upload
router.post(`/uploads`, upload.single(`file`), storageController.upload);

module.exports = router;
