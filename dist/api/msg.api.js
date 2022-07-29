"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.msg_api = void 0;
const winston_logger_1 = require("../utils/winston.logger");
const interfaces_1 = require("../DAO/interfaces");
const msg_factory_1 = require("../DAO/msg.factory");
// Argumentos valirdos para MsgFactory.get()
// PersistenceType.FireBase
// PersistenceType.Mongo
// PersistenceType.Mongo_Atlas
// Si no se ingresa ninguno de los anteriores, toma por defecto => PersistenceType.FileSystem
class MsgAPI {
    constructor() {
        this.msg = msg_factory_1.MsgFactory.get(interfaces_1.PersistenceType.Mongo_Atlas);
    }
    async get() {
        try {
            return await this.msg.get();
        }
        catch (err) {
            winston_logger_1.logger.error(`MsgApi => get func. error=${err.message}`);
        }
    }
    async add(new_msg) {
        try {
            await this.msg.add(new_msg);
        }
        catch (err) {
            winston_logger_1.logger.error(`MsgApi => add func. error=${err.message}`);
        }
    }
}
exports.msg_api = new MsgAPI();
//# sourceMappingURL=msg.api.js.map