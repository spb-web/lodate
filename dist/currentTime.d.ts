/**
 * Sets the current time
 *
 * @param {number|null} newTime A numeric value representing the
 * number of elapsed milliseconds since midnight, January 1, 1970 GMT
 * or null for use local time.
 */
export declare const setNow: (newTime: number | null) => void;
/**
 * Gets the time value in milliseconds.
 *
 * @return {number} Time value in milliseconds
 */
export declare const now: () => number;
