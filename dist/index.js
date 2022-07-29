"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_logger_1 = require("./utils/winston.logger");
const server_1 = require("./services/server");
const config_1 = __importDefault(require("./config"));
const cluster_1 = __importDefault(require("cluster"));
const os_1 = __importDefault(require("os"));
const numCPUs = os_1.default.cpus().length;
const PORT = process.env.PORT || 8080;
if (cluster_1.default.isPrimary && config_1.default.SERVER_MODE === 'cluster') {
    const cpuToUse = 4;
    winston_logger_1.logger.info(`Numero de CPUs de mi pc:${numCPUs}`);
    winston_logger_1.logger.info(`Numero de CPUs a utilizar: ${cpuToUse}`);
    winston_logger_1.logger.info(`PID Master:${process.pid}`);
    for (let cpu = cpuToUse; cpu < numCPUs; cpu++) {
        cluster_1.default.fork();
    }
    cluster_1.default.on('exit', (WORKER) => {
        winston_logger_1.logger.warn(`PID => ${WORKER.process.pid} will die at:${Date()}`);
        cluster_1.default.fork();
    });
}
else {
    server_1.httpServer.listen(PORT, () => {
        winston_logger_1.logger.info(`Server runnign on port:${PORT} => PID WORKER:${process.pid}`);
        //mongoConnection(PersistenceType.Mongo);
        //ioService.init(httpServer);
        //mysql_service.init();
    });
}
//# sourceMappingURL=index.js.map