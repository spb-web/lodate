import { now } from './currentTime';
import getDate from './getDate';
import getFullYear from './getFullYear';
import getMonth from './getMonth';
import withZero from './helpers/withZero';
export default function ddmmyyyy(payload = now()) {
    const yyyy = getFullYear(payload);
    // getMonth() is zero-based
    const mm = withZero(getMonth(payload) + 1);
    const dd = withZero(getDate(payload));
    return `${dd}.${mm}.${yyyy}`;
}
//# sourceMappingURL=ddmmyyyy.js.map