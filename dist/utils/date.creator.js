"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.date_creator = void 0;
const moment_1 = __importDefault(require("moment"));
const date_creator = (date) => {
    return new Promise((resolve, reject) => {
        resolve(moment_1.default(date).format('DD-MM-YY hh:mm:ss a'));
    });
};
exports.date_creator = date_creator;
//# sourceMappingURL=date.creator.js.map