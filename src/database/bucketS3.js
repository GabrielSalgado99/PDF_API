require("dotenv").config();
const fs = require("fs");
const s3 = require("aws-sdk/clients/s3");

const bucketName = process.env.S3_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKey = process.env.AWS_ACCESS_KEY_ID;
const secretKey = process.env.AWS_SECRET_ACCESS_KEY;

const bucket = new s3({
  region,
  accessKey,
  secretKey,
});

function uploadToBucket(file) {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
  };

  return bucket.putObject(uploadParams).promise();
}

module.exports = { uploadToBucket };
