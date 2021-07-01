"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ReceiveQRCodesController_1 = __importDefault(require("../controller/ReceiveQRCodesController"));
var FavoriteQRCodeController_1 = __importDefault(require("../controller/FavoriteQRCodeController"));
var ColorQRCodeController_1 = __importDefault(require("../controller/ColorQRCodeController"));
var verifyJwtToken_1 = __importDefault(require("@shared/middlewares/verifyJwtToken"));
var receivedQrCodesRouter = express_1.Router();
var receivedQRCodesController = new ReceiveQRCodesController_1.default();
var favoriteQRCodesController = new FavoriteQRCodeController_1.default();
var colorQRCodesController = new ColorQRCodeController_1.default();
receivedQrCodesRouter.post('/received_qrcode/:qrcode_id', verifyJwtToken_1.default, receivedQRCodesController.create);
receivedQrCodesRouter.patch('/received_qrcode/favorite/:qrcode_id', verifyJwtToken_1.default, favoriteQRCodesController.update);
receivedQrCodesRouter.patch('/received_qrcode/color/:qrcode_id', verifyJwtToken_1.default, colorQRCodesController.update);
receivedQrCodesRouter.get('/filtered_qrcodes/data?:color?:favorite?:month?:year', verifyJwtToken_1.default, receivedQRCodesController.index);
exports.default = receivedQrCodesRouter;
