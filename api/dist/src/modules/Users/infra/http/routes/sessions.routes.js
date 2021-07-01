"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var verifyJwtToken_1 = __importDefault(require("@shared/middlewares/verifyJwtToken"));
var express_1 = require("express");
var SignUpController_1 = __importDefault(require("../controller/SignUpController"));
var SignInController_1 = __importDefault(require("../controller/SignInController"));
var ResetPasswordController_1 = __importDefault(require("../controller/ResetPasswordController"));
var sessionsRouter = express_1.Router();
var signUpController = new SignUpController_1.default();
var signInController = new SignInController_1.default();
var resetPasswordController = new ResetPasswordController_1.default();
sessionsRouter.post('/signup', signUpController.create);
sessionsRouter.post('/signIn', signInController.create);
sessionsRouter.patch('/resetPassword', verifyJwtToken_1.default, resetPasswordController.update);
exports.default = sessionsRouter;
