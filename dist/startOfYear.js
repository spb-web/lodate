import getFullYear from './getFullYear';
export default function startOfYear(payload = new Date()) {
    return new Date(getFullYear(payload), 0, 1, 0, 0, 0, 0);
}
//# sourceMappingURL=startOfYear.js.map