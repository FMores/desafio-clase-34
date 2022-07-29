"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgFileSystemDAO = void 0;
const date_creator_1 = require("../utils/date.creator");
const promises_1 = __importDefault(require("fs/promises"));
class MsgFileSystemDAO {
    constructor(fileLocation) {
        this.filePath = fileLocation;
    }
    async fileStat() {
        const fileStats = await promises_1.default.stat(this.filePath);
        if (fileStats.size === 0) {
            await promises_1.default.writeFile(this.filePath, JSON.stringify([]));
            const fileInitialized = await promises_1.default.stat(this.filePath);
            return fileInitialized;
        }
        return fileStats;
    }
    async readFile() {
        await this.fileStat();
        const dataStr = await promises_1.default.readFile(this.filePath, 'utf8');
        const dataObj = JSON.parse(dataStr);
        return dataObj;
    }
    async writeFile(data) {
        await promises_1.default.writeFile(this.filePath, JSON.stringify(data, null, '\t'));
    }
    async get() {
        try {
            await this.fileStat();
            const msg_array = await this.readFile();
            //const msg_normalized = normalizr_function.nmzr(msg_array);
            //console.log(util.inspect(msg_normalized, true, 7, true));
            return msg_array;
        }
        catch (err) {
            console.log('Error:', err.message);
        }
    }
    async add(new_msg) {
        const stats = await this.fileStat();
        const date = await date_creator_1.date_creator();
        if (stats.size > 2) {
            const currentMsgArray = await this.readFile();
            const msg_to_save = {
                author: {
                    _id: new_msg.email,
                    name: new_msg.name,
                    surname: new_msg.surname,
                    age: new_msg.age,
                    alias: new_msg.alias,
                    avatar: new_msg.avatar,
                },
                text: new_msg.text,
                timestamp: date,
            };
            currentMsgArray.push(msg_to_save);
            await this.writeFile(currentMsgArray);
        }
        else {
            const initial_msg = {
                author: {
                    _id: new_msg.email,
                    name: new_msg.name,
                    surname: new_msg.surname,
                    age: new_msg.age,
                    alias: new_msg.alias,
                    avatar: new_msg.avatar,
                },
                text: new_msg.text,
                timestamp: date,
            };
            const initialArrayOfProducts = [initial_msg];
            await this.writeFile(initialArrayOfProducts);
        }
    }
}
exports.MsgFileSystemDAO = MsgFileSystemDAO;
//# sourceMappingURL=msg.Fs.DAO.js.map