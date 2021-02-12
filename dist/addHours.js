import { now } from './currentTime';
export default function addHours(addedHours, payload = now()) {
    const date = new Date(payload);
    date.setHours(date.getHours() + addedHours);
    return date;
}
//# sourceMappingURL=addHours.js.map