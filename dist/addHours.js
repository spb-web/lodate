"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const currentTime_1 = require("./currentTime");
/**
 * @param addedHours
 * @param payload
 *
 * @category Add
 *
 * @example
 * ```typescript
 * import addHours from 'lodate/addHours';
 *
 * const threeHoursLater = addHours(3);
 * const twoHoursEarlier = addHours(-2);
 * const now = addHours(2, twoHoursEarlier);
 * ```
 */
function addHours(addedHours, payload = currentTime_1.now()) {
    const date = new Date(payload);
    date.setHours(date.getHours() + addedHours);
    return date;
}
exports.default = addHours;
//# sourceMappingURL=addHours.js.map