"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDevMode = exports.isEmptyValue = exports.isNullOrUndefined = void 0;
const process_1 = require("process");
const isNullOrUndefined = (val) => val === null || val === undefined;
exports.isNullOrUndefined = isNullOrUndefined;
const isEmptyValue = (val) => (0, exports.isNullOrUndefined)(val) || val === false || val === '';
exports.isEmptyValue = isEmptyValue;
const isDevMode = () => (0, exports.isEmptyValue)(process_1.env.PRODUCTION) || process_1.env.PRODUCTION === 'false';
exports.isDevMode = isDevMode;
//# sourceMappingURL=helpers.js.map