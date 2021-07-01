"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var crypto_1 = __importDefault(require("crypto"));
var multer_1 = __importDefault(require("multer"));
var aws_sdk_1 = __importDefault(require("aws-sdk"));
var multer_s3_1 = __importDefault(require("multer-s3"));
var TMP_FOLDER = path_1.default.resolve(__dirname, '..', '..', 'tmp');
var MAX_SIZE_FIVE_MEGABYTES = 5 * 1024 * 1024;
var storageTypes = {
    local: {
        storage: multer_1.default.diskStorage({
            destination: TMP_FOLDER,
            filename: function (request, file, cb) {
                var fileHash = crypto_1.default.randomBytes(8).toString("hex");
                var fileName = fileHash + "-" + file.originalname;
                return cb(null, fileName);
            }
        })
    },
    s3: multer_s3_1.default({
        s3: new aws_sdk_1.default.S3(),
        bucket: process.env.BUCKET_NAME,
        contentType: multer_s3_1.default.AUTO_CONTENT_TYPE,
        acl: "public-read",
        key: function (req, file, cb) {
            crypto_1.default.randomBytes(16, function (err, hash) {
                if (err)
                    cb(err);
                var fileHash = crypto_1.default.randomBytes(8).toString("hex");
                var fileName = fileHash + "-" + file.originalname;
                cb(null, fileName);
            });
        },
    }),
};
exports.default = {
    dest: TMP_FOLDER,
    storage: storageTypes[process.env.STORAGE_TYPE],
    limits: {
        fileSize: MAX_SIZE_FIVE_MEGABYTES,
    },
    fileFilter: function (req, file, cb) {
        var allowedMimes = [
            "video/mp4",
        ];
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        }
        else {
            cb(new Error("Invalid file type."));
        }
    },
};
