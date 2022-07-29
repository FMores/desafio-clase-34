"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpServer = exports.hbs = exports.app = void 0;
const errorHandler_1 = require("../middleware/errorHandler");
const express_1 = __importDefault(require("express"));
const winston_logger_1 = require("../utils/winston.logger");
const express_handlebars_1 = require("express-handlebars");
const index_1 = __importDefault(require("../routes/index"));
const auth_1 = __importDefault(require("../middleware/auth"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const express_session_1 = __importDefault(require("express-session"));
const config_1 = __importDefault(require("../config"));
const http_1 = require("http");
const path_1 = __importDefault(require("path"));
exports.app = express_1.default();
exports.hbs = express_handlebars_1.create({
    extname: 'hbs',
    layoutsDir: path_1.default.resolve(__dirname, '../../views/layouts'),
    defaultLayout: path_1.default.resolve(__dirname, '../../views/layouts/main'),
    partialsDir: path_1.default.resolve(__dirname, '../../views/partial'),
});
exports.app.engine('hbs', exports.hbs.engine);
exports.app.set('view engine', 'hbs');
exports.app.set('views', path_1.default.resolve(__dirname, '../../views'));
exports.app.use(compression_1.default());
exports.app.use(express_1.default.static(path_1.default.resolve(__dirname, '../../public')));
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use(cookie_parser_1.default(config_1.default.COOKIE_PARSER_SECRET));
exports.app.use(express_session_1.default({
    secret: config_1.default.EXPRESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 20000,
    },
}));
exports.app.use(auth_1.default.initialize());
exports.app.use(auth_1.default.session());
exports.app.use((req, res, next) => {
    winston_logger_1.logger.info(`Method:${req.method}, Route:${req.originalUrl}`);
    next();
});
exports.app.use('/api', index_1.default);
exports.app.use(errorHandler_1.errorHandler);
// Creamos un servidor con http para poder utilizar socket junto a express
exports.httpServer = new http_1.Server(exports.app);
//# sourceMappingURL=server.js.map