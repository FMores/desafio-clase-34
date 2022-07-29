"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const signUp_logIn_Schema = joi_1.default.object().keys({
    password: joi_1.default.string().min(4).max(40),
    email: joi_1.default.string().email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] },
    }),
});
exports.default = signUp_logIn_Schema;
//# sourceMappingURL=joi.schemas.js.map