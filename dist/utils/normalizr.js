"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizr_function = void 0;
const normalizr_1 = require("normalizr");
const util_1 = __importDefault(require("util"));
class Normalizr {
    constructor() {
        this.data = {
            id: 154,
            chats: [
                {
                    id: 1,
                    author: {
                        id: '1@mail.com',
                        nombre: 'nombre del usuario',
                        apellido: 'apellido del usuario',
                        edad: 'edad del usuario',
                        alias: 'alias del usuario',
                        avatar: 'url avatar (foto, logo) del usuario',
                    },
                    comment: 'mensaje del usuario 1',
                },
                {
                    id: 1,
                    author: {
                        id: '1@mail.com',
                        nombre: 'nombre del usuario',
                        apellido: 'apellido del usuario',
                        edad: 'edad del usuario',
                        alias: 'alias del usuario',
                        avatar: 'url avatar (foto, logo) del usuario',
                    },
                    comment: 'mensaje 2',
                },
                {
                    id: 2,
                    author: {
                        id: '2@mail.com',
                        nombre: 'nombre del usuario',
                        apellido: 'apellido del usuario',
                        edad: 'edad del usuario',
                        alias: 'alias del usuario',
                        avatar: 'url avatar (foto, logo) del usuario',
                    },
                    comment: 'mensaje del usuario 2',
                },
                {
                    id: 3,
                    author: {
                        id: '3@mail.com',
                        nombre: 'nombre del usuario',
                        apellido: 'apellido del usuario',
                        edad: 'edad del usuario',
                        alias: 'alias del usuario',
                        avatar: 'url avatar (foto, logo) del usuario',
                    },
                    comment: 'mensaje del usuario 3',
                },
            ],
        };
        this.schemaUser = new normalizr_1.schema.Entity('user', {}, { idAttribute: 'id' });
        this.schemaAuthor = new normalizr_1.schema.Entity('comment', {
            commenst: this.schemaUser,
        });
        this.msgSchema = new normalizr_1.schema.Entity('messages', {
            author: [this.schemaUser],
            comments: [this.schemaAuthor],
        });
    }
    async nmzr(messages) {
        let msgNormalized = normalizr_1.normalize(this.data, this.msgSchema);
        console.log(util_1.default.inspect(msgNormalized, true, 7, true));
        return msgNormalized;
    }
}
exports.normalizr_function = new Normalizr();
//# sourceMappingURL=normalizr.js.map