const express = require("express");
const multer = require("multer");
const uuid = require("uuid").v4;
const multerRouter = express.Router();

const { s3Uploadv3 } = require("../s3Service");
const { postPhoto } = require("../queries/photosqueries");

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype.split("/")[0] === "image") {
    cb(null, true);
  } else {
    cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, //5MB
});

multerRouter.post("/upload", upload.single("file"), async (req, res) => {
  const file = req.file;
  const { truck_id, user_id, caption } = req.body;
  const key = uuid(); // Generate the UUID here
  try {
    // Upload the file to AWS S3 with the generated UUID
    const awsresult = await s3Uploadv3(file, key);
    const imageUrl = `${process.env.POST_URL}${key}-${file.originalname}`;

    const backendresult = await postPhoto(imageUrl, truck_id, user_id, caption);

    // Send the response
    res.json({ status: "success", awsresult, backendresult });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "error", error: err.message });
  }
});

multerRouter.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        message: "File is too large",
      });
    }
    if (error.code === "LIMIT_FILE_COUNT") {
      return res.status(400).json({
        message: "File limit reached",
      });
    }
    if (error.code === "LIMIT_UNEXPECTED_FILE") {
      return res.status(400).json({
        message: "File must be an image",
      });
    }
  }

  // Call next() to pass the error to the next error handling middleware
  // next(error);
});

module.exports = multerRouter;
