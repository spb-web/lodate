"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const currentTime_1 = require("./currentTime");
const formatsRelative_1 = require("./ru/formatsRelative");
/**
 * Localized relative date/time formatting (both for past and future dates).
 *
 * @category Formatter
 *
 * @example
 * ```
 * const createdAt = new Date(2021, 0, 1)
 *
 * fromAgo(createdAt); // 20 day(s) ago;
 * ```
 *
 * @param payload
 * @return { string }
 */
function relative(payload = currentTime_1.now(), options) {
    const { formatter = formatsRelative_1.default } = options;
    const date = new Date(payload);
    const ms = date.getTime() - currentTime_1.now();
    const data = [
        [1000, 60],
        [60000, 60],
        [3600000, 24],
        [86400000, 30],
        [2592000000, 12],
        [31104000000, Infinity],
    ];
    for (let index = 0; index < data.length; index++) {
        const [divider, maximumValue] = data[index];
        const value = Math.round(ms / divider);
        if (Math.abs(value) < maximumValue) {
            return formatter(value, index);
        }
    }
    throw new Error();
}
exports.default = relative;
//# sourceMappingURL=relative.js.map