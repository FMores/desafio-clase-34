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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const num_random_1 = require("../utils/num.random");
const config_1 = __importStar(require("../config"));
const os_1 = require("os");
const numCPUs = os_1.cpus().length;
const router = express_1.Router();
router.get('/info', (req, res) => {
    //console.log('resolviendo ruta /info con  console.log');
    res.status(200).send({
        Project_folder: process.cwd(),
        Execution_path: process.execPath,
        Nodejs_version: process.version,
        Platform_name: process.platform,
        Server_port: config_1.default.SERVER_PORT,
        Process_ID: process.pid,
        Total_reserved_memory: process.memoryUsage(),
        Input_arguments: config_1.yargs,
        Qty_processors: numCPUs,
    });
});
router.get('/random', (req, res) => {
    const { qty } = req.query;
    const numRandom = num_random_1.random(Number(qty));
    res.status(200).send({
        Server_port: config_1.default.SERVER_PORT,
        Process_ID: process.pid,
        Random_numbers: numRandom,
    });
});
exports.default = router;
//# sourceMappingURL=system.test.js.map