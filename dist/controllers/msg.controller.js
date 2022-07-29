"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msgController = void 0;
const msg_api_1 = require("../api/msg.api");
class MsgController {
    async get() {
        return await msg_api_1.msg_api.get();
    }
    async add(new_msg) {
        await msg_api_1.msg_api.add(new_msg);
    }
}
exports.msgController = new MsgController();
//# sourceMappingURL=msg.controller.js.map