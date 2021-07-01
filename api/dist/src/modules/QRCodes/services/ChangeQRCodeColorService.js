"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var Colors_1 = require("../interfaces/Colors");
var checkReceivedQRCodeProperties_1 = __importDefault(require("../utils/checkReceivedQRCodeProperties"));
var getQRCodeById_1 = require("../utils/getQRCodeById");
var getUserById_1 = require("../utils/getUserById");
var ChangeFavoriteStatusService = /** @class */ (function () {
    function ChangeFavoriteStatusService(qrcodeRepository, usersRepository) {
        this.qrcodeRepository = qrcodeRepository;
        this.usersRepository = usersRepository;
    }
    ChangeFavoriteStatusService.prototype.checkColorValidity = function (color) {
        return Colors_1.colorsObject.hasOwnProperty(color);
    };
    ChangeFavoriteStatusService.prototype.run = function (userId, qrcodeId, color) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var qrCode, type;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.checkColorValidity(color))
                            throw new Error('Color is not valid!');
                        return [4 /*yield*/, getUserById_1.getUserById(userId, this.usersRepository)];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, getQRCodeById_1.getQRCodeById(qrcodeId, this.qrcodeRepository)];
                    case 2:
                        qrCode = _c.sent();
                        checkReceivedQRCodeProperties_1.default(qrCode, userId, false);
                        type = ((_a = qrCode.user) === null || _a === void 0 ? void 0 : _a.id) === userId
                            ? 'madeColor'
                            : 'receivedColor';
                        if (type === 'receivedColor') {
                            if (!('receivedUser' in qrCode))
                                throw new Error('QR Code does not contain an user on the receiving end');
                            if (userId !== ((_b = qrCode.receivedUser) === null || _b === void 0 ? void 0 : _b.id))
                                throw new Error("You cannot alter the status of this QR Code due to the fact that it wasn't you who received it");
                        }
                        return [4 /*yield*/, this.qrcodeRepository.changeQRCodeColor(qrCode, color, type)];
                    case 3:
                        qrCode = _c.sent();
                        return [2 /*return*/, qrCode];
                }
            });
        });
    };
    ChangeFavoriteStatusService = __decorate([
        tsyringe_1.injectable(),
        __param(0, tsyringe_1.inject('QRCodeRepository')),
        __param(1, tsyringe_1.inject('UsersRepository')),
        __metadata("design:paramtypes", [Object, Object])
    ], ChangeFavoriteStatusService);
    return ChangeFavoriteStatusService;
}());
exports.default = ChangeFavoriteStatusService;
