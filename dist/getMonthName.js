import { MONTHS } from './ru/MONTHS';
import getMonth from './getMonth';
import { now } from './currentTime';
export default function getMonthName(payload = now()) {
    const date = getMonth(payload);
    return MONTHS[date];
}
//# sourceMappingURL=getMonthName.js.map