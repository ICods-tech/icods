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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var QRCode_1 = __importDefault(require("../../../../QRCodes/infra/typeorm/models/QRCode"));
var class_transformer_1 = require("class-transformer");
var post_1 = __importDefault(require("@modules/Posts/infra/typeorm/models/post"));
var like_1 = __importDefault(require("@modules/Posts/infra/typeorm/models/like"));
var comment_1 = __importDefault(require("@modules/Posts/infra/typeorm/models/comment"));
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'text',
            unique: true,
            nullable: true,
        }),
        __metadata("design:type", String)
    ], User.prototype, "username", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'text',
            unique: true,
        }),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        class_transformer_1.Exclude(),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], User.prototype, "visibility", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return QRCode_1.default; }, function (qrcode) { return qrcode.user; }, {
            cascade: true
        }),
        __metadata("design:type", Array)
    ], User.prototype, "qrcodes", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return QRCode_1.default; }, function (qrcode) { return qrcode.receivedUser; }, {
            cascade: true
        }),
        __metadata("design:type", Array)
    ], User.prototype, "receivedQRCodes", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return post_1.default; }, function (post) { return post.user; }, {
            cascade: true
        }),
        __metadata("design:type", Array)
    ], User.prototype, "posts", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return like_1.default; }, function (like) { return like.user; }, {
            cascade: true
        }),
        __metadata("design:type", Array)
    ], User.prototype, "likes", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return comment_1.default; }, function (comment) { return comment.user; }, {
            cascade: true
        }),
        __metadata("design:type", Array)
    ], User.prototype, "comments", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], User.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], User.prototype, "updated_at", void 0);
    User = __decorate([
        typeorm_1.Entity('users')
    ], User);
    return User;
}());
exports.default = User;
