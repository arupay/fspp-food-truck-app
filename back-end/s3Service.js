const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const uuid = require("uuid").v4;

exports.s3Uploadv3 = async (file, key) => {
  const s3client = new S3Client();
  const param = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `uploads/${key}-${file.originalname}`,
    Body: file.buffer,
  };

  return s3client.send(new PutObjectCommand(param));
};
