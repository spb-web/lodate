"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MONTHS_1 = require("./ru/MONTHS");
const getMonth_1 = require("./getMonth");
const currentTime_1 = require("./currentTime");
function getMonthNameOf(payload = currentTime_1.now()) {
    const date = getMonth_1.default(payload);
    return MONTHS_1.MONTHS_OF[date];
}
exports.default = getMonthNameOf;
//# sourceMappingURL=getMonthNameOf.js.map