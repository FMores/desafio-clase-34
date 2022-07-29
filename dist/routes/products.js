"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const auth_1 = require("../middleware/auth");
const router = express_1.Router();
/* Ruta para agregar un producto nuevo mediante un formulario */
router.get('/', auth_1.isLoggedIn, express_async_handler_1.default((req, res) => {
    var _a;
    const uEmail = (_a = req.user) === null || _a === void 0 ? void 0 : _a.email;
    res.render('index', { uEmail });
}));
/* Ruta para agregar un producto nuevo mediante un formulario */
router.get('/test', express_async_handler_1.default((req, res) => {
    res.render('fake_product_list');
}));
exports.default = router;
//# sourceMappingURL=products.js.map