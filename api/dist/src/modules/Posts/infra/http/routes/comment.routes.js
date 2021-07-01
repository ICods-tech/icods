"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var verifyJwtToken_1 = __importDefault(require("@shared/middlewares/verifyJwtToken"));
var CommentController_1 = __importDefault(require("../controller/CommentController"));
var express_1 = require("express");
var commentRouter = express_1.Router();
var commentController = new CommentController_1.default();
commentRouter.post('/comment', verifyJwtToken_1.default, commentController.create);
commentRouter.delete('/comment/:comment_id', verifyJwtToken_1.default, commentController.destroy);
commentRouter.put('/comment/:comment_id', verifyJwtToken_1.default, commentController.update);
exports.default = commentRouter;
