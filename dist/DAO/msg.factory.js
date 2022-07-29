"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgFactory = void 0;
const msg_Fs_DAO_1 = require("./msg.Fs.DAO");
const msg_FireBase_DAO_1 = require("./msg.FireBase.DAO");
const msg_Mongo_DAO_1 = require("./msg.Mongo.DAO");
const interfaces_1 = require("./interfaces");
const path_1 = __importDefault(require("path"));
const winston_logger_1 = require("../utils/winston.logger");
class MsgFactory {
    static get(type) {
        switch (type) {
            case interfaces_1.PersistenceType.Mongo:
                winston_logger_1.logger.info('Starting persistence in Mongo_Local for messages');
                return new msg_Mongo_DAO_1.MsgMongoDAO(interfaces_1.PersistenceType.Mongo);
            case interfaces_1.PersistenceType.Mongo_Atlas:
                winston_logger_1.logger.info('Starting persistence in Mongo_Atlas for messages');
                return new msg_Mongo_DAO_1.MsgMongoDAO(interfaces_1.PersistenceType.Mongo_Atlas);
            case interfaces_1.PersistenceType.FireBase:
                winston_logger_1.logger.info('Starting persistence in FireBase for messages');
                return new msg_FireBase_DAO_1.FireBaseMsgDAO();
            default:
                interfaces_1.PersistenceType.FileSystem;
                winston_logger_1.logger.info('Starting local file persistence for messages');
                const fileLocation = path_1.default.resolve(__dirname, '../db/messages.json');
                return new msg_Fs_DAO_1.MsgFileSystemDAO(fileLocation);
        }
    }
}
exports.MsgFactory = MsgFactory;
//# sourceMappingURL=msg.factory.js.map