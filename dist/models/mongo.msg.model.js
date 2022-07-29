"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const messageSchema = new mongoose_1.Schema({
    author: {
        id: {
            type: String,
            required: true,
            match: /.+\@.+\..+/,
        },
        name: { type: String, required: true, max: 50 },
        surname: { type: String, required: true, max: 50 },
        alias: { type: String, required: true, max: 50 },
        age: { type: Number, required: true },
        avatar: { type: String, required: true, max: 50 },
    },
    text: { type: String, required: true, max: 1000 },
    timestamp: { type: String, required: true },
}, {
    timestamps: false,
    versionKey: false,
});
exports.default = mongoose_1.model('message', messageSchema);
//# sourceMappingURL=mongo.msg.model.js.map