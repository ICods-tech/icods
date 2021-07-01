"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AppError_1 = __importDefault(require("@shared/error/AppError"));
var jsonwebtoken_1 = require("jsonwebtoken");
function ensureAuthenticated(req, res, next) {
    var _a;
    var authHeader = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(',')[0];
    if (!authHeader) {
        throw new AppError_1.default('Missing JWT Token', 401);
    }
    var _b = authHeader.split(' '), token = _b[1];
    try {
        var verifyToken = jsonwebtoken_1.verify(token, process.env.SECRET);
        var id = verifyToken.id;
        req.user = {
            id: id
        };
        return next();
    }
    catch (err) {
        throw new AppError_1.default('Invalid JWT token', 401);
    }
}
exports.default = ensureAuthenticated;
