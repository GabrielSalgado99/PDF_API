const storageServices = require("../services/storageServices");

async function uploadFile(req, res, next) {
  res.render(`uploadFile`);
}

async function upload(req, res, next) {
  const file = req.file;
  storageServices.uploadToDatabase(file);
  res.send("Arquivo Recebido");
}

module.exports = { uploadFile, upload };
