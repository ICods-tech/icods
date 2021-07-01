"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var UsersRepository_1 = __importDefault(require("@modules/Users/infra/typeorm/repositories/UsersRepository"));
var FollowersRepository_1 = __importDefault(require("@modules/Users/infra/typeorm/repositories/FollowersRepository"));
var QRCodesRepository_1 = __importDefault(require("@modules/QRCodes/infra/typeorm/repositories/QRCodesRepository"));
var postsRepository_1 = __importDefault(require("@modules/Posts/infra/typeorm/repositories/postsRepository"));
var likesRepository_1 = __importDefault(require("@modules/Posts/infra/typeorm/repositories/likesRepository"));
var commentsRepository_1 = __importDefault(require("@modules/Posts/infra/typeorm/repositories/commentsRepository"));
tsyringe_1.container.registerSingleton('UsersRepository', UsersRepository_1.default);
tsyringe_1.container.registerSingleton('PostsRepository', postsRepository_1.default);
tsyringe_1.container.registerSingleton('LikesRepository', likesRepository_1.default);
tsyringe_1.container.registerSingleton('CommentsRepository', commentsRepository_1.default);
tsyringe_1.container.registerSingleton('FollowersRepository', FollowersRepository_1.default);
tsyringe_1.container.registerSingleton('QRCodeRepository', QRCodesRepository_1.default);
