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
exports.sortQRCodeListByDate = void 0;
function sortQRCodeListByDate(qrCodes, type) {
    qrCodes = (qrCodes === null || qrCodes === void 0 ? void 0 : qrCodes.length) ? qrCodes.sort(function (a, b) { return b[type] - a[type]; })
        : [];
    return type === 'comparisonDate' ? qrCodes : qrCodes.map(function (qrCode) { return (__assign(__assign({}, qrCode), { comparisonDate: qrCode[type] })); });
}
exports.sortQRCodeListByDate = sortQRCodeListByDate;
