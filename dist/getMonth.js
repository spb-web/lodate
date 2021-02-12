import { now } from './currentTime';
export default function getMonth(payload = now()) {
    const date = new Date(payload);
    return date.getMonth();
}
//# sourceMappingURL=getMonth.js.map