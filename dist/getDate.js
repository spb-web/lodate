"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const currentTime_1 = require("./currentTime");
/**
 * Gets the day-of-the-month.
 *
 * @param payload
 *
 * @returns {string} day-of-the-month
 */
function getDate(payload = currentTime_1.now()) {
    const date = new Date(payload);
    return date.getDate();
}
exports.default = getDate;
//# sourceMappingURL=getDate.js.map