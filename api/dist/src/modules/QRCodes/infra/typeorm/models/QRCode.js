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
var post_1 = __importDefault(require("@modules/Posts/infra/typeorm/models/post"));
var typeorm_1 = require("typeorm");
var user_1 = __importDefault(require("../../../../Users/infra/typeorm/models/user"));
var QRCode = /** @class */ (function () {
    function QRCode() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], QRCode.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], QRCode.prototype, "enabled", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], QRCode.prototype, "link", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], QRCode.prototype, "content", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
            default: false
        }),
        __metadata("design:type", Boolean)
    ], QRCode.prototype, "favorited", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'enum',
            enum: ['red', 'blue', 'green', 'yellow', 'black', 'noColor', 'cyan', 'pink'],
            default: 'noColor',
            nullable: true
        }),
        __metadata("design:type", String)
    ], QRCode.prototype, "madeColor", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'enum',
            enum: ['red', 'blue', 'green', 'yellow', 'black', 'noColor', 'cyan', 'pink'],
            default: 'noColor',
            nullable: true
        }),
        __metadata("design:type", String)
    ], QRCode.prototype, "receivedColor", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return user_1.default; }, function (user) { return user.qrcodes; }, {
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
            eager: true
        }),
        __metadata("design:type", Object)
    ], QRCode.prototype, "user", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return user_1.default; }, function (user) { return user.receivedQRCodes; }, {
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        }),
        __metadata("design:type", Object)
    ], QRCode.prototype, "receivedUser", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return post_1.default; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", post_1.default)
    ], QRCode.prototype, "post", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], QRCode.prototype, "postId", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], QRCode.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.Column({ type: 'timestamptz', nullable: true }),
        __metadata("design:type", Date)
    ], QRCode.prototype, "received_at", void 0);
    QRCode = __decorate([
        typeorm_1.Entity('qrcodes')
    ], QRCode);
    return QRCode;
}());
exports.default = QRCode;
