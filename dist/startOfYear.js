"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getFullYear_1 = require("./getFullYear");
function startOfYear(payload = new Date()) {
    return new Date(getFullYear_1.default(payload), 0, 1, 0, 0, 0, 0);
}
exports.default = startOfYear;
//# sourceMappingURL=startOfYear.js.map