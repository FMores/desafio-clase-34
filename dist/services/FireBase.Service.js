"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fireBaseConnection = void 0;
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const config_1 = __importDefault(require("../config"));
const fireBaseConnection = () => {
    app_1.initializeApp({
        credential: app_1.cert(config_1.default.FIREBASE_ACCOUNT_CONFIG),
    });
    const db = firestore_1.getFirestore();
    console.log('Successful connection to FireBase database');
    return db;
};
exports.fireBaseConnection = fireBaseConnection;
//# sourceMappingURL=FireBase.Service.js.map