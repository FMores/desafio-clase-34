"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/,
    },
    password: {
        type: String,
        required: true,
    },
});
userSchema.pre('save', async function (next) {
    const user = this;
    const hashedPwd = await bcrypt_1.default.hash(user.password, 10);
    this.password = hashedPwd;
    next();
});
userSchema.methods.comparePwd = async function (password) {
    const user = this;
    const pwdComparisonResult = await bcrypt_1.default.compare(password, user.password);
    return pwdComparisonResult;
};
exports.default = mongoose_1.model('user', userSchema);
//# sourceMappingURL=mongo.user.model.js.map