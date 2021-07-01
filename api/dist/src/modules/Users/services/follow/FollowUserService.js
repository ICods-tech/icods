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
var AppError_1 = __importDefault(require("@shared/error/AppError"));
var tsyringe_1 = require("tsyringe");
var RabbitmqServer_1 = __importDefault(require("@shared/middlewares/RabbitmqServer"));
var FollowUserService = /** @class */ (function () {
    function FollowUserService(usersRepository, followersRepository) {
        this.usersRepository = usersRepository;
        this.followersRepository = followersRepository;
    }
    FollowUserService.prototype.run = function (id, followingId) {
        return __awaiter(this, void 0, void 0, function () {
            var REQUEST_FOLLOWER_FALSE, REQUEST_FOLLOWER_TRUE, user, isPrivate, rabbit, follow, error_1, follow;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        REQUEST_FOLLOWER_FALSE = false;
                        REQUEST_FOLLOWER_TRUE = true;
                        return [4 /*yield*/, this.usersRepository.findById(followingId)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new AppError_1.default("Trying to follow an user that doesn't exist");
                        }
                        if (id === followingId) {
                            throw new AppError_1.default("You cannot follow yourself!");
                        }
                        return [4 /*yield*/, this.followersRepository.checkFollowing(id, followingId)];
                    case 2:
                        if (_a.sent()) {
                            return [2 /*return*/, { message: 'User already followed!' }];
                        }
                        isPrivate = (user === null || user === void 0 ? void 0 : user.visibility) ? true : false;
                        if (!isPrivate) return [3 /*break*/, 8];
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 7, , 8]);
                        rabbit = new RabbitmqServer_1.default(process.env.URL_RABBIT);
                        return [4 /*yield*/, rabbit.start()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.followersRepository.follow({ userId: id, followingId: followingId, requestFollower: REQUEST_FOLLOWER_TRUE })];
                    case 5:
                        follow = _a.sent();
                        Object.assign(follow, { phoneId: "id-phone-notify" });
                        return [4 /*yield*/, rabbit.publishInQueue(process.env.QUEUE_NAME, JSON.stringify(follow))];
                    case 6:
                        _a.sent();
                        return [2 /*return*/, { message: 'You send request for follow 🤗!' }];
                    case 7:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [2 /*return*/, { message: 'You send request notification failed 😞' }];
                    case 8: return [4 /*yield*/, this.followersRepository.follow({ userId: id, followingId: followingId, requestFollower: REQUEST_FOLLOWER_FALSE })];
                    case 9:
                        follow = _a.sent();
                        return [2 /*return*/, follow];
                }
            });
        });
    };
    FollowUserService = __decorate([
        tsyringe_1.injectable(),
        __param(0, tsyringe_1.inject('UsersRepository')),
        __param(1, tsyringe_1.inject('FollowersRepository')),
        __metadata("design:paramtypes", [Object, Object])
    ], FollowUserService);
    return FollowUserService;
}());
exports.default = FollowUserService;
