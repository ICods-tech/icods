"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addQRCodesToReceivedDates = void 0;
var formatDateFiltering_1 = require("./formatDateFiltering");
function addQRCodesToReceivedDates(sortedQRCodes, orderedReceivedQRCodes) {
    var _a, _b;
    var temporaryMonths = {};
    var previousMonth = sortedQRCodes.length && formatDateFiltering_1.formatDateFiltering(sortedQRCodes[0].comparisonDate);
    temporaryMonths[previousMonth] = [];
    for (var _i = 0, sortedQRCodes_1 = sortedQRCodes; _i < sortedQRCodes_1.length; _i++) {
        var qrcode = sortedQRCodes_1[_i];
        var comparisonDate = qrcode.comparisonDate;
        var formattedMonth = formatDateFiltering_1.formatDateFiltering(comparisonDate);
        if (formattedMonth in temporaryMonths) {
            temporaryMonths[formattedMonth].push(qrcode);
        }
        else {
            temporaryMonths[formattedMonth] = [qrcode];
            orderedReceivedQRCodes.data.push((_a = {},
                _a[previousMonth] = temporaryMonths[previousMonth],
                _a));
            delete temporaryMonths[previousMonth];
            previousMonth = formattedMonth;
        }
        delete qrcode.received_at;
        delete qrcode.created_at;
    }
    if (Object.keys(temporaryMonths)) {
        var firstMonth = Object.keys(temporaryMonths)[0];
        orderedReceivedQRCodes.data.push((_b = {},
            _b[firstMonth] = temporaryMonths[firstMonth],
            _b));
    }
}
exports.addQRCodesToReceivedDates = addQRCodesToReceivedDates;
