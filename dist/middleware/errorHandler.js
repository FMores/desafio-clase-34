"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const winston_logger_1 = require("../utils/winston.logger");
const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong';
    if (!req.route) {
        winston_logger_1.logger.warn(`Method:${req.method}, Route:${req.originalUrl}, ${err.message} `);
        res.status(status).send({ status, message });
        return;
    }
    res.status(status).send({ status, message });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map