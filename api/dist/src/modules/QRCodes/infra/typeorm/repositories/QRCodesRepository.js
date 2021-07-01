"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AppError_1 = __importDefault(require("@shared/error/AppError"));
var typeorm_1 = require("typeorm");
var QRCodesRepository = /** @class */ (function () {
    function QRCodesRepository() {
        this.ormRepostory = typeorm_1.getRepository('qrcodes');
    }
    QRCodesRepository.prototype.filterMadeQRCode = function (qrcode) {
        var receivedColor = qrcode.receivedColor, favorited = qrcode.favorited, received_at = qrcode.received_at, filteredQrCode = __rest(qrcode, ["receivedColor", "favorited", "received_at"]);
        return filteredQrCode;
    };
    QRCodesRepository.prototype.filterUser = function (user) {
        var created_at = user.created_at, updated_at = user.updated_at, password = user.password, filteredUser = __rest(user, ["created_at", "updated_at", "password"]);
        return filteredUser;
    };
    QRCodesRepository.prototype.create = function () {
        return __awaiter(this, void 0, void 0, function () {
            var qrcode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qrcode = this.ormRepostory.create({
                            link: '',
                            content: '',
                            enabled: false,
                        });
                        return [4 /*yield*/, this.ormRepostory.save(qrcode)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.filterMadeQRCode(qrcode)];
                }
            });
        });
    };
    QRCodesRepository.prototype.get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var qrcode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ormRepostory.findOne(id, { relations: ['user', 'receivedUser'] })];
                    case 1:
                        qrcode = _a.sent();
                        if (qrcode) {
                            if (qrcode.user)
                                qrcode.user = this.filterUser(qrcode.user);
                            if (qrcode.receivedUser)
                                qrcode.receivedUser = this.filterUser(qrcode.receivedUser);
                        }
                        return [2 /*return*/, qrcode || undefined];
                }
            });
        });
    };
    QRCodesRepository.prototype.getMultipleDeactivatedQRCodes = function (numberOfQrCodes) {
        return __awaiter(this, void 0, void 0, function () {
            var qrcodes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ormRepostory.find({ where: { enabled: false }, take: numberOfQrCodes })];
                    case 1:
                        qrcodes = _a.sent();
                        return [2 /*return*/, qrcodes];
                }
            });
        });
    };
    QRCodesRepository.prototype.save = function (qrcode) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ormRepostory.save(qrcode)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    QRCodesRepository.prototype.changeFavoriteStatus = function (qrCode) {
        return __awaiter(this, void 0, void 0, function () {
            var favorited;
            return __generator(this, function (_a) {
                favorited = qrCode.favorited;
                Object.assign(qrCode, { favorited: !favorited });
                this.ormRepostory.save(qrCode);
                return [2 /*return*/, qrCode];
            });
        });
    };
    QRCodesRepository.prototype.changeQRCodeColor = function (qrCode, color, type) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        Object.assign(qrCode, (_a = {}, _a[type] = color, _a));
                        return [4 /*yield*/, this.ormRepostory.save(qrCode)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, qrCode];
                }
            });
        });
    };
    QRCodesRepository.prototype.receiveQRCode = function (qrcode, user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object.assign(qrcode, {
                            receivedUser: user,
                            received_at: new Date()
                        });
                        return [4 /*yield*/, this.ormRepostory.save(qrcode)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, qrcode];
                }
            });
        });
    };
    QRCodesRepository.prototype.activate = function (id, user) {
        return __awaiter(this, void 0, void 0, function () {
            var qrcode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ormRepostory.findOne(id)];
                    case 1:
                        qrcode = _a.sent();
                        if (!qrcode)
                            throw new AppError_1.default('This QRCode does not exist');
                        qrcode = __assign(__assign({}, qrcode), { enabled: true, link: "generate_qrcode/" + id, content: '', user: user });
                        return [4 /*yield*/, this.ormRepostory.save(qrcode)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, qrcode];
                }
            });
        });
    };
    QRCodesRepository.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ormRepostory.delete(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return QRCodesRepository;
}());
exports.default = QRCodesRepository;
