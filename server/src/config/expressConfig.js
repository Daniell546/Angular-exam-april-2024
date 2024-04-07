const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cookieSecret = process.env.COOKIESECRET || "SoftUni";

module.exports = (app) => {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cookieParser(cookieSecret));
    app.use(express.static(path.resolve(__basedir, "static")));
};
