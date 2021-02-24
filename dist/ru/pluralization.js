"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const directory = [
    ['секунда', 'секунды', 'секунд'],
    ['минута', 'минуты', 'минут'],
    ['час', 'часа', 'часов'],
    ['месяц', 'месяца', 'месяцев'],
    ['год', 'года', 'лет']
];
const cases = [2, 0, 1, 1, 1, 2];
function pluralization(value, type) {
    const index = ((value % 100 > 4 && value % 100 < 20)
        ? 2
        : cases[Math.min(value % 10, 5)]);
    return directory[type][index];
}
exports.default = pluralization;
//# sourceMappingURL=pluralization.js.map