"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var verifyJwtToken_1 = __importDefault(require("@shared/middlewares/verifyJwtToken"));
var express_1 = require("express");
var ProfileVisibilityController_1 = __importDefault(require("../controller/ProfileVisibilityController"));
var profileRouter = express_1.Router();
var profileVisibilityController = new ProfileVisibilityController_1.default();
profileRouter.patch('/changeVisibility', verifyJwtToken_1.default, profileVisibilityController.update);
exports.default = profileRouter;
