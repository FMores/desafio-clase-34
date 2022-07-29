"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgMongoDAO = void 0;
const mongo_msg_model_1 = __importDefault(require("../models/mongo.msg.model"));
const Mongo_Service_1 = require("../services/Mongo.Service");
const date_creator_1 = require("../utils/date.creator");
class MsgMongoDAO {
    constructor(persistence) {
        this.persistence = persistence;
        this.msg = mongo_msg_model_1.default;
        this.initMongo();
    }
    async initMongo() {
        await Mongo_Service_1.mongoConnection(this.persistence);
    }
    async get() {
        return await this.msg.find();
    }
    async add(msg_data) {
        const date = await date_creator_1.date_creator();
        const msgToSave = {
            author: {
                id: msg_data.email,
                name: msg_data.name,
                surname: msg_data.surname,
                age: msg_data.age,
                alias: msg_data.alias,
                avatar: msg_data.avatar,
            },
            text: msg_data.text,
            timestamp: date,
        };
        const newMsg = new this.msg(msgToSave);
        await newMsg.save();
    }
}
exports.MsgMongoDAO = MsgMongoDAO;
//# sourceMappingURL=msg.Mongo.DAO.js.map