"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.now = exports.setNow = void 0;
let t = 0;
let time = 0;
/**
 * Sets the current time
 *
 * @param {number|null} newTime A numeric value representing the
 * number of elapsed milliseconds since midnight, January 1, 1970 GMT
 * or null for use local time.
 *
 * @category Server time or not local time
 *
 * @example
 * ```typescript
 * import setNow from 'lodate/setNow';
 *
 * setNow(1673933270000);
 * ```
 */
const setNow = (newTime) => {
    [t, time] = newTime === null ? [0, 0] : [Date.now(), newTime];
};
exports.setNow = setNow;
/**
 * Gets the time value in milliseconds.
 *
 * @return {number} Time value in milliseconds
 *
 * @category Server time or not local time
 *
 * @example
 * ```typescript
 * import now from 'lodate/now';
 *
 * const serverTime = now();
 * ```
 */
const now = () => {
    return time + (Date.now() - t);
};
exports.now = now;
//# sourceMappingURL=currentTime.js.map