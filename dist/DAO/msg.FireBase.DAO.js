"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FireBaseMsgDAO = void 0;
const FireBase_Service_1 = require("../services/FireBase.Service");
const date_creator_1 = require("../utils/date.creator");
class FireBaseMsgDAO {
    constructor() {
        (this.db = FireBase_Service_1.fireBaseConnection()), (this.collection = this.db.collection('messages'));
    }
    async get() {
        const snapshot = await this.collection.orderBy('timestamp').get();
        const docs = snapshot.docs;
        const msgList = docs.map((aDocs) => (Object.assign({ _id: aDocs.id }, aDocs.data())));
        return msgList;
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
        await this.collection.add(msgToSave);
        return;
    }
}
exports.FireBaseMsgDAO = FireBaseMsgDAO;
//# sourceMappingURL=msg.FireBase.DAO.js.map