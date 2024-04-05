const jwt = require('./jwt');
const { authCookieName } = require('../app-config');
const secret = process.env.SECRET || "SoftSecret";
const User = require("../models/User");
const TokenBlackList = require("../models/TokenBlackList");

exports.auth = async (req, res, next) => {
    const token = req.cookies[authCookieName];

    if(token) {
        try {
            const decodedToken = await jwt.verify(token, secret);
            req.user = decodedToken;
            res.locals.user = decodedToken;
            res.locals.isAuthenticated = true;
            next();
            
        } catch (error) {
            res.clearCookie(authCookieName);
        }

    } else {
        next();
    }
}
