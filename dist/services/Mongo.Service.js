"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoConnection = void 0;
const index_1 = __importDefault(require("../config/index"));
const mongoose_1 = __importDefault(require("mongoose"));
const winston_logger_1 = require("../utils/winston.logger");
const mongoConnection = async (type) => {
    try {
        if (type === 'Mongo') {
            const mongoDbLocal = await mongoose_1.default.connect(index_1.default.MONGO_LOCAL_URI);
            winston_logger_1.logger.info('Successful connection to local mongo database');
            return mongoDbLocal;
        }
        else {
            const mongoAtlas = await mongoose_1.default.connect(index_1.default.MONGO_ATLAS_URI);
            winston_logger_1.logger.info('Successful connection to mongo atlas database');
            return mongoAtlas;
        }
    }
    catch (err) {
        winston_logger_1.logger.error(`Cannot connect to the database because: ${err.message}`);
    }
};
exports.mongoConnection = mongoConnection;
//# sourceMappingURL=Mongo.Service.js.map