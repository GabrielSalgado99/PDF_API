const bucket = require("../database/bucketS3");

async function uploadToDatabase(file) {
  await bucket.uploadToBucket(file);
}

module.exports = { uploadToDatabase };
