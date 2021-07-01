"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateFiltering = void 0;
var date_fns_1 = require("date-fns");
var locale_1 = require("date-fns/locale");
function formatDateFiltering(received_at) {
    var formattedMonth = date_fns_1.format(date_fns_1.parseISO(received_at === null || received_at === void 0 ? void 0 : received_at.toISOString()), "MMMM' de 'yyyy", { locale: locale_1.pt });
    formattedMonth = formattedMonth.charAt(0).toUpperCase() + formattedMonth.substring(1);
    return formattedMonth;
}
exports.formatDateFiltering = formatDateFiltering;
