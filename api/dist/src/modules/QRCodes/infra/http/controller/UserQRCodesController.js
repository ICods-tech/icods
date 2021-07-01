"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GetUserQRCodesService_1 = __importDefault(require("@modules/Users/services/user/GetUserQRCodesService"));
var GetUserQRCodeService_1 = __importDefault(require("@modules/QRCodes/services/GetUserQRCodeService"));
var AddQRCodeContentService_1 = __importDefault(require("@modules/QRCodes/services/AddQRCodeContentService"));
var tsyringe_1 = require("tsyringe");
var UserQRCodesController = /** @class */ (function () {
    function UserQRCodesController() {
    }
    UserQRCodesController.prototype.index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var user_id, getUserQRCodesService, qrcodes, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        user_id = request.user.id;
                        getUserQRCodesService = tsyringe_1.container.resolve(GetUserQRCodesService_1.default);
                        return [4 /*yield*/, getUserQRCodesService.run(user_id)];
                    case 1:
                        qrcodes = _a.sent();
                        return [2 /*return*/, response.json(qrcodes)];
                    case 2:
                        err_1 = _a.sent();
                        return [2 /*return*/, response.status(400).json(err_1.message)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserQRCodesController.prototype.show = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var qrcode_id, getUserQRCodeService, qrcode, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        qrcode_id = request.params.qrcode_id;
                        console.log(qrcode_id);
                        getUserQRCodeService = tsyringe_1.container.resolve(GetUserQRCodeService_1.default);
                        return [4 /*yield*/, getUserQRCodeService.run(qrcode_id)];
                    case 1:
                        qrcode = _a.sent();
                        return [2 /*return*/, response.json(qrcode)];
                    case 2:
                        err_2 = _a.sent();
                        return [2 /*return*/, response.status(400).json(err_2.message)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserQRCodesController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var qrcode_id, _a, name_1, size, key, _b, url, addQRCodeContentService, qrcode, err_3;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        qrcode_id = request.params.qrcode_id;
                        _a = request.file, name_1 = _a.originalname, size = _a.size, key = _a.key, _b = _a.location, url = _b === void 0 ? "" : _b;
                        addQRCodeContentService = tsyringe_1.container.resolve(AddQRCodeContentService_1.default);
                        return [4 /*yield*/, addQRCodeContentService.run(qrcode_id, name_1, size, key, url)];
                    case 1:
                        qrcode = _c.sent();
                        return [2 /*return*/, response.json(qrcode)];
                    case 2:
                        err_3 = _c.sent();
                        return [2 /*return*/, response.status(400).json(err_3.message)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UserQRCodesController;
}());
exports.default = UserQRCodesController;
