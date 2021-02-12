import { MONTHS_OF } from './ru/MONTHS';
import getMonth from './getMonth';
import { now } from './currentTime';
export default function getMonthNameOf(payload = now()) {
    const date = getMonth(payload);
    return MONTHS_OF[date];
}
//# sourceMappingURL=getMonthNameOf.js.map