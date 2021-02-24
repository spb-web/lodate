"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pluralization_1 = require("./pluralization");
const formatsEgo = {
    past: (value, unit) => `${value} ${unit} назад`,
    future: (value, unit) => `через ${value} ${unit}`,
};
const formatRelative = (value, type) => {
    return formatsEgo[value < 0 ? 'past' : 'future'](value, pluralization_1.default(value, type));
};
exports.default = formatRelative;
//# sourceMappingURL=formatsRelative.js.map