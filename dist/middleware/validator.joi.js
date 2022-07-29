"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = void 0;
const winston_logger_1 = require("../utils/winston.logger");
const validator = (schema) => {
    return async (req, res, next) => {
        try {
            const { error } = await schema.validateAsync(req.body);
            const valid = error == null;
            if (valid) {
                next();
            }
            else {
                const { details } = error;
                winston_logger_1.logger.error(details);
            }
        }
        catch (error) {
            winston_logger_1.logger.error(`Validator middleware catch this error= ${error}`);
            res.render('joiError');
        }
    };
};
exports.validator = validator;
//# sourceMappingURL=validator.joi.js.map