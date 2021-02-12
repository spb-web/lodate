"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const currentTime_1 = require("./currentTime");
function getMonth(payload = currentTime_1.now()) {
    const date = new Date(payload);
    return date.getMonth();
}
exports.default = getMonth;
//# sourceMappingURL=getMonth.js.map