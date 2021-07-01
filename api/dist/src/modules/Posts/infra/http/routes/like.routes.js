"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var verifyJwtToken_1 = __importDefault(require("@shared/middlewares/verifyJwtToken"));
var LikeController_1 = __importDefault(require("../controller/LikeController"));
var express_1 = require("express");
var likeRouter = express_1.Router();
var likeController = new LikeController_1.default();
likeRouter.post('/like', verifyJwtToken_1.default, likeController.create);
likeRouter.delete('/unlike', verifyJwtToken_1.default, likeController.destroy);
// postRouter.get(
//   '/post/:post_id',
//   verifyJwtToken,
//   postController.show
// )
// followRouter.delete(
//   '/unfollow/:followingId',
//   verifyJwtToken,
//   followController.destroy
// )
// followRouter.get(
//   '/followers',
//   verifyJwtToken,
//   followerController.index
// )
exports.default = likeRouter;
