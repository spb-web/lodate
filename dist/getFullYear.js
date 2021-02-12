import { now } from './currentTime';
export default function getFullYear(payload = now()) {
    return (new Date(payload)).getFullYear();
}
//# sourceMappingURL=getFullYear.js.map