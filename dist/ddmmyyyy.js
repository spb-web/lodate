"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const currentTime_1 = require("./currentTime");
const getDate_1 = require("./getDate");
const getFullYear_1 = require("./getFullYear");
const getMonth_1 = require("./getMonth");
const withZero_1 = require("./helpers/withZero");
/**
 * @category Formatter
 * @param payload
 */
function ddmmyyyy(payload = currentTime_1.now()) {
    const yyyy = getFullYear_1.default(payload);
    // getMonth() is zero-based
    const mm = withZero_1.default(getMonth_1.default(payload) + 1);
    const dd = withZero_1.default(getDate_1.default(payload));
    return `${dd}.${mm}.${yyyy}`;
}
exports.default = ddmmyyyy;
//# sourceMappingURL=ddmmyyyy.js.map