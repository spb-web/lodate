"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const currentTime_1 = require("./currentTime");
const getFullYear_1 = require("./getFullYear");
function endOfYear(payload = currentTime_1.now()) {
    return new Date(getFullYear_1.default(payload), 12, 31, 23, 59, 59, 999);
}
exports.default = endOfYear;
//# sourceMappingURL=endOfYear.js.map