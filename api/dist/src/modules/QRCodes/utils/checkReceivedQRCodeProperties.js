"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkReceivedQRCodeProperties(qrCode, userId, favorited) {
    var _a;
    if (!qrCode.user)
        throw new Error('QR Code was not activated yet!');
    if (favorited) {
        if (!('receivedUser' in qrCode))
            throw new Error('QR Code does not contain an user on the receiving end');
        if (userId !== ((_a = qrCode.receivedUser) === null || _a === void 0 ? void 0 : _a.id))
            throw new Error("You cannot alter the status of this QR Code due to the fact that it wasn't you who received it");
    }
}
exports.default = checkReceivedQRCodeProperties;
