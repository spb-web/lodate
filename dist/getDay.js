"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const currentTime_1 = require("./currentTime");
/**
 * Gets the day of the week
 *
 * @param payload
 *
 * @return {number} day of the week
 */
function getDay(payload = currentTime_1.now()) {
    const date = new Date(payload);
    return date.getDay();
}
exports.default = getDay;
//# sourceMappingURL=getDay.js.map