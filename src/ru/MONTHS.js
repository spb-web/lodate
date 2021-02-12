export const MONTHS = Object.freeze(['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']);
export const MONTHS_OF = Object.freeze(MONTHS.map((month, index) => `${month.slice(0, -1)}${[2, 7].includes(index) ? 'а' : 'я'}`));
//# sourceMappingURL=MONTHS.js.map