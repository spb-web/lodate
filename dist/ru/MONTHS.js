"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONTHS_OF = exports.MONTHS = void 0;
exports.MONTHS = Object.freeze(['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']);
exports.MONTHS_OF = Object.freeze(exports.MONTHS.map((month, index) => `${month.slice(0, -1)}${[2, 7].includes(index) ? 'а' : 'я'}`));
//# sourceMappingURL=MONTHS.js.map