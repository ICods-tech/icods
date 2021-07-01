"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var verifyJwtToken_1 = __importDefault(require("@shared/middlewares/verifyJwtToken"));
var FollowController_1 = __importDefault(require("@modules/Users/infra/http/controller/FollowController"));
var FollowerController_1 = __importDefault(require("@modules/Users/infra/http/controller/FollowerController"));
var express_1 = require("express");
var followRouter = express_1.Router();
var followController = new FollowController_1.default();
var followerController = new FollowerController_1.default();
followRouter.post('/follow/:followingId', verifyJwtToken_1.default, followController.create);
followRouter.delete('/unfollow/:followingId', verifyJwtToken_1.default, followController.destroy);
followRouter.get('/follow', verifyJwtToken_1.default, followController.index);
followRouter.get('/followers', verifyJwtToken_1.default, followerController.index);
followRouter.get('/followers/accept/:id', verifyJwtToken_1.default, followController.acceptFollower);
followRouter.get('/followers/reject/:id', verifyJwtToken_1.default, followController.rejectFollower);
exports.default = followRouter;
