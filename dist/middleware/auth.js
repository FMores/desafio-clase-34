"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLoggedIn = void 0;
const passport_local_1 = require("passport-local");
const mongo_user_model_1 = __importDefault(require("../models/mongo.user.model"));
const passport_1 = __importDefault(require("passport"));
const strategyOptions = {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
};
const loginFunc = async (req, email, password, done) => {
    const user = await mongo_user_model_1.default.findOne({ email });
    if (!user) {
        return done(null, false, 'Invalid email!');
    }
    if (!(await user.comparePwd(password))) {
        return done(null, false, 'Invalid password!');
    }
    return done(null, user);
};
const signUpFunc = async (req, email, password, done) => {
    const user = await mongo_user_model_1.default.findOne({ email: email });
    if (user) {
        return done(null, false, 'User already exists');
    }
    else {
        const userData = {
            email,
            password,
        };
        const newUser = new mongo_user_model_1.default(userData);
        await newUser.save();
        return done(null, newUser);
    }
};
passport_1.default.use('login', new passport_local_1.Strategy(strategyOptions, loginFunc));
passport_1.default.use('signup', new passport_local_1.Strategy(strategyOptions, signUpFunc));
passport_1.default.serializeUser((user, done) => {
    done(null, user._id);
});
passport_1.default.deserializeUser((userId, done) => {
    mongo_user_model_1.default.findById(userId, function (err, user) {
        done(err, user);
    });
});
const isLoggedIn = (req, res, done) => {
    if (!req.user)
        return res.redirect('/api/auth/login');
    done();
};
exports.isLoggedIn = isLoggedIn;
exports.default = passport_1.default;
//# sourceMappingURL=auth.js.map