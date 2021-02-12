"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const currentTime_1 = require("./currentTime");
const getFullYear_1 = require("./getFullYear");
const getMonth_1 = require("./getMonth");
const getDate_1 = require("./getDate");
const withZero_1 = require("./helpers/withZero");
/**
 * @category Formatter
 * @param payload
 */
function yyyymmdd(payload = currentTime_1.now()) {
    const yyyy = getFullYear_1.default(payload);
    // getMonth() is zero-based
    const mm = withZero_1.default(getMonth_1.default(payload) + 1);
    const dd = withZero_1.default(getDate_1.default(payload));
    return `${yyyy}-${mm}-${dd}`;
}
exports.default = yyyymmdd;
//# sourceMappingURL=yyyymmdd.js.map