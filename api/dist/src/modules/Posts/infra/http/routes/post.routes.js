"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var verifyJwtToken_1 = __importDefault(require("@shared/middlewares/verifyJwtToken"));
var PostController_1 = __importDefault(require("../controller/PostController"));
var express_1 = require("express");
var postRouter = express_1.Router();
var postController = new PostController_1.default();
postRouter.post('/post', verifyJwtToken_1.default, postController.create);
postRouter.get('/post/:post_id', verifyJwtToken_1.default, postController.show);
postRouter.delete('/post/:post_id', verifyJwtToken_1.default, postController.destroy);
exports.default = postRouter;
