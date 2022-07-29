"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
const { combine, timestamp, json, cli } = winston_1.format;
const warnFilter = winston_1.format((info, opts) => {
    return info.level === 'warn' ? info : false;
});
const errorFilter = winston_1.format((info, opts) => {
    return info.level === 'error' ? info : false;
});
exports.logger = winston_1.createLogger({
    transports: [
        new winston_1.transports.File({
            filename: './src/logs/warn.log',
            level: 'warn',
            format: combine(warnFilter(), timestamp({
                format: 'DD-MM-YY hh:mm:ss.SSS A',
            }), json()),
        }),
        new winston_1.transports.File({
            filename: './src/logs/error.log',
            level: 'error',
            format: combine(errorFilter(), timestamp({
                format: 'DD-MM-YY hh:mm:ss.SSS A',
            }), json()),
        }),
        new winston_1.transports.Console({ level: 'info', format: cli() }),
    ],
});
//# sourceMappingURL=winston.logger.js.map