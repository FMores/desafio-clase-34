"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { mongoConnection } from './services/Mongo.Service';
//import { mysql_service } from './services/MySQL.Service';
//import { PersistenceType } from './DAO/interfaces';
//import { ioService } from './services/Socket.Service';
const server_1 = require("./services/server");
const config_1 = __importStar(require("./config"));
const os_1 = __importDefault(require("os"));
const numCPUs = os_1.default.cpus().length;
console.log('ecosystem:', config_1.yargs);
server_1.httpServer.listen(config_1.default.SERVER_PORT, () => {
    console.log(`Server runnign on port:${config_1.default.SERVER_PORT} => PID WORKER:${process.pid}`);
    //mongoConnection(PersistenceType.Mongo);
    //ioService.init(httpServer);
    //mysql_service.init();
});
//# sourceMappingURL=index.ecosystem.js.map