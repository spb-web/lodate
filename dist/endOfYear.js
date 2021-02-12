import { now } from './currentTime';
import getFullYear from './getFullYear';
export default function endOfYear(payload = now()) {
    return new Date(getFullYear(payload), 12, 31, 23, 59, 59, 999);
}
//# sourceMappingURL=endOfYear.js.map