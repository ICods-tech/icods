"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterQrCodes = void 0;
var sortQRCodeList_1 = require("./sortQRCodeList");
function filterQrCodes(qrCodes, receivedQRCodes, color, favorite, month, year) {
    if (receivedQRCodes) {
        (color !== 'noFilter') && (qrCodes = qrCodes.filter(function (qrcode) { return qrcode.receivedColor === color; }));
        favorite && (qrCodes = qrCodes.filter(function (qrcode) { return qrcode.favorited === true; }));
        if (month && year)
            qrCodes = qrCodes.filter(function (qrcode) { var _a, _b; return (((_a = qrcode.received_at) === null || _a === void 0 ? void 0 : _a.getFullYear()) === year && ((_b = qrcode.received_at) === null || _b === void 0 ? void 0 : _b.getMonth()) === month); });
        qrCodes = sortQRCodeList_1.sortQRCodeListByDate(qrCodes, 'received_at');
    }
    else {
        (color !== 'noFilter') && (qrCodes = qrCodes.filter(function (qrcode) { return qrcode.madeColor === color; }));
        favorite && (qrCodes = []);
        if (month && year)
            qrCodes = qrCodes.filter(function (qrcode) { var _a, _b; return (((_a = qrcode.created_at) === null || _a === void 0 ? void 0 : _a.getFullYear()) === year && ((_b = qrcode.created_at) === null || _b === void 0 ? void 0 : _b.getMonth()) === month); });
        qrCodes = sortQRCodeList_1.sortQRCodeListByDate(qrCodes, 'created_at');
    }
    return qrCodes.map(function (qrcode) {
        var _a;
        var filteredQRCode = __assign(__assign({}, qrcode), { qrCodeCreatorName: receivedQRCodes ? (_a = qrcode.user) === null || _a === void 0 ? void 0 : _a.name : "Você" });
        delete filteredQRCode.user;
        delete filteredQRCode.receivedUser;
        var color = receivedQRCodes ? qrcode.receivedColor : qrcode.madeColor;
        delete filteredQRCode.madeColor;
        delete filteredQRCode.receivedColor;
        return Object.assign(filteredQRCode, { color: color });
    });
}
exports.filterQrCodes = filterQrCodes;
