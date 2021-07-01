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
var comment_1 = __importDefault(require("./comment"));
var like_1 = __importDefault(require("./like"));
var user_1 = __importDefault(require("@modules/Users/infra/typeorm/models/user"));
var QRCode_1 = __importDefault(require("@modules/QRCodes/infra/typeorm/models/QRCode"));
var Post = /** @class */ (function () {
    function Post() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Post.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return user_1.default; }, {
            onDelete: 'CASCADE'
        }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", user_1.default)
    ], Post.prototype, "user", void 0);
    __decorate([
        typeorm_1.Column('uuid'),
        __metadata("design:type", String)
    ], Post.prototype, "userId", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return QRCode_1.default; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", QRCode_1.default)
    ], Post.prototype, "qrcode", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Post.prototype, "qrcodeId", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return comment_1.default; }, function (comment) { return comment.post; }, {
            cascade: true
        }),
        __metadata("design:type", Array)
    ], Post.prototype, "comments", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return like_1.default; }, function (like) { return like.post; }, {
            cascade: true
        }),
        __metadata("design:type", Array)
    ], Post.prototype, "likes", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Post.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Post.prototype, "updated_at", void 0);
    Post = __decorate([
        typeorm_1.Entity('posts')
    ], Post);
    return Post;
}());
exports.default = Post;
