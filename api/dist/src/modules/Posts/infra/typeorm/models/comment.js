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
var user_1 = __importDefault(require("../../../../Users/infra/typeorm/models/user"));
var post_1 = __importDefault(require("./post"));
var Comment = /** @class */ (function () {
    function Comment() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Comment.prototype, "id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return user_1.default; }, function (user) { return user.likes; }, {
            onDelete: 'CASCADE'
        }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", user_1.default)
    ], Comment.prototype, "user", void 0);
    __decorate([
        typeorm_1.Column('uuid'),
        __metadata("design:type", String)
    ], Comment.prototype, "userId", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return post_1.default; }, function (post) { return post.likes; }, {
            onDelete: 'CASCADE'
        }),
        __metadata("design:type", post_1.default)
    ], Comment.prototype, "post", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Comment.prototype, "content", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Comment.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Comment.prototype, "updated_at", void 0);
    Comment = __decorate([
        typeorm_1.Entity('comments')
    ], Comment);
    return Comment;
}());
exports.default = Comment;
