"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validator_joi_1 = require("../middleware/validator.joi");
const joi_schemas_1 = __importDefault(require("../models/joi.schemas"));
const auth_1 = require("../middleware/auth");
const passport_1 = __importDefault(require("passport"));
const router = express_1.Router();
/*------------------------------------------------ */
/*-------------------- LOG IN -------------------- */
/*------------------------------------------------ */
router.get('/login', (req, res) => {
    res.render('logIn');
});
router.post('/login', validator_joi_1.validator(joi_schemas_1.default), passport_1.default.authenticate('login', {
    successRedirect: '/api/productos',
    failWithError: true,
}), (err, req, res, next) => {
    res.render('invalidCredentials');
});
/*------------------------------------------------- */
/*-------------------- SIGN UP -------------------- */
/*------------------------------------------------- */
router.get('/signup', (req, res) => {
    res.render('signup');
});
router.post('/signup', validator_joi_1.validator(joi_schemas_1.default), (req, res, next) => {
    passport_1.default.authenticate('signup', function (err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user)
            return res.render('userExist');
        res.redirect('/api/productos');
    })(req, res, next);
});
/*------------------------------------------------ */
/*-------------------- LOGOUT -------------------- */
/*------------------------------------------------ */
router.get('/logout', auth_1.isLoggedIn, (req, res) => {
    let uEmail;
    if (req.user) {
        uEmail = req.user.email;
    }
    req.session.destroy((e) => {
        if (e) {
            throw new Error(e.message);
        }
        return res.render('logout', { uEmail });
    });
});
exports.default = router;
//# sourceMappingURL=auth.js.map