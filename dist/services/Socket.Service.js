"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ioService = void 0;
const product_controller_1 = require("../controllers/product.controller");
const msg_controller_1 = require("../controllers/msg.controller");
const socket_io_1 = __importDefault(require("socket.io"));
const winston_logger_1 = require("../utils/winston.logger");
//Datos utiles
//Para responder a un solo cliente => socket.emit('peticion', respuesta)
//Para responder a todos => this.ioServer.emit('peticion', respuesta)
//Para responder a todos menos al que envia el mensaje => socket.broadcast.emit('peticion', respuesta)
class IoService {
    constructor() {
        this.init = (httpServer) => {
            winston_logger_1.logger.info('Iniciando conexión socket');
            if (this.ioServer) {
                winston_logger_1.logger.info('Una conexión socket ya se encuentra establecida.');
            }
            else {
                this.ioServer = new socket_io_1.default.Server(httpServer);
                this.ioServer.on('connection', async (socket) => {
                    // Chat-Room
                    socket.emit('mensajes', await msg_controller_1.msgController.get());
                    socket.on('new-msg', async (data) => {
                        var _a;
                        await msg_controller_1.msgController.add(data);
                        (_a = this.ioServer) === null || _a === void 0 ? void 0 : _a.emit('mensajes', await msg_controller_1.msgController.get());
                    });
                    // Produc List
                    socket.emit('product-list', await product_controller_1.product_Controller.getAll());
                    socket.on('new_product', async (data) => {
                        var _a;
                        await product_controller_1.product_Controller.save(data);
                        (_a = this.ioServer) === null || _a === void 0 ? void 0 : _a.emit('product-list', await product_controller_1.product_Controller.getAll());
                    });
                });
            }
        };
    }
}
exports.ioService = new IoService();
//# sourceMappingURL=Socket.Service.js.map