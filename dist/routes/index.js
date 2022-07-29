"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = __importDefault(require("./products"));
const system_test_1 = __importDefault(require("./system.test"));
const express_1 = require("express");
const auth_1 = __importDefault(require("./auth"));
const router = express_1.Router();
router.use('/productos', products_1.default);
router.use('/auth', auth_1.default);
router.use('/system', system_test_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map