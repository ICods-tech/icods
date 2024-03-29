import path from 'path'
import crypto from 'crypto'
import multer from 'multer'
import aws from "aws-sdk";
import multerS3 from "multer-s3"

const TMP_FOLDER = path.resolve(__dirname, '..', '..', 'tmp')
const MAX_SIZE_MEGABYTES = 70 * 1024 * 1024;

const storageTypes = {
  local: {
    storage: multer.diskStorage({
      destination: TMP_FOLDER,
      filename: (request, file, cb) => {
        const fileHash = crypto.randomBytes(8).toString("hex")
        const fileName = `${fileHash}-${file.originalname}`

        return cb(null, fileName)
      }
    })
  },
  s3: multerS3({
    s3: new aws.S3(),
    bucket: process.env.BUCKET_NAME || 'icods-studio',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: "public-read",
    key: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => { // /90c24e5b7c486162-uruguayfeelnaturxe1minmp4
        if (err) cb(err);
        const fileHash = new Date().toISOString().slice(0,10).replace(/-/g,"_") + '_' + new Date().getTime()
        const sanitizeFileName = file.originalname.replace(/[^0-9a-zA-Z]/g, '').slice(0, -3)
        const fileName = `${sanitizeFileName}_${fileHash}.mp4`
        cb(null, fileName);
      });
    },
  }),
}

export default {
  dest: TMP_FOLDER,
  storage: storageTypes[process.env.STORAGE_TYPE],
  limits: {
    fileSize: MAX_SIZE_MEGABYTES,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      "video/mp4",
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type."));
    }
  },
};
