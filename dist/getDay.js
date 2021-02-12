import { now } from './currentTime';
/**
 * Gets the day of the week
 *
 * @param payload
 *
 * @return {number} day of the week
 */
export default function getDay(payload = now()) {
    const date = new Date(payload);
    return date.getDay();
}
//# sourceMappingURL=getDay.js.map