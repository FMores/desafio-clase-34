"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.yargs = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const { hideBin } = require('yargs/helpers');
exports.yargs = require('yargs/yargs')(hideBin(process.argv)).argv;
dotenv_1.default.config();
const config = {
    SERVER_MODE: exports.yargs.server_mode || 'Fork',
    SERVER_PORT: exports.yargs.server_port || process.env.SERVER_PORT || 3000,
    MONGO_LOCAL_URI: process.env.MONGO_LOCAL_URI || 'your_local_uri',
    MONGO_ATLAS_URI: process.env.MONGO_ATLAS_URI || 'your_mongo_atlas_uri',
    FIREBASE_ACCOUNT_CONFIG: process.env.FIREBASE_ACCOUNT_CONFIG || 'your_FIREBASE_ACCOUNT_CONFIG',
    EXPRESS_SESSION_SECRET: process.env.EXPRESS_SESSION_SECRET || 'your express-session_secret',
    COOKIE_PARSER_SECRET: process.env.COOKIE_PARSER_SECRET || 'your cookie-parser_secret',
};
exports.default = config;
//# sourceMappingURL=index.js.map