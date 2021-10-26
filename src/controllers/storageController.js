async function uploadFile(req, res, next) {
  res.render(`uploadFile`);
}

async function upload(req, res, next) {
  res.send("Arquivo Recebido");
}

module.exports = { uploadFile, upload };
