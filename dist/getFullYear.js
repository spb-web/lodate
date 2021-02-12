"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const currentTime_1 = require("./currentTime");
function getFullYear(payload = currentTime_1.now()) {
    return (new Date(payload)).getFullYear();
}
exports.default = getFullYear;
//# sourceMappingURL=getFullYear.js.map