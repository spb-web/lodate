let t = 0;
let time = 0;
/**
 * Sets the current time
 *
 * @param {number|null} newTime A numeric value representing the
 * number of elapsed milliseconds since midnight, January 1, 1970 GMT
 * or null for use local time.
 */
export const setNow = (newTime) => {
    [t, time] = newTime === null ? [0, 0] : [Date.now(), newTime];
};
/**
 * Gets the time value in milliseconds.
 *
 * @return {number} Time value in milliseconds
 */
export const now = () => {
    return time + (Date.now() - t);
};
//# sourceMappingURL=currentTime.js.map