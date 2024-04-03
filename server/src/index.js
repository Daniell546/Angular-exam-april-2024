global.__basedir = __dirname;
const app = require("express")();
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const cookieSecret = process.env.COOKIESECRET || 'SoftUni';

const routes = require("./routes");
const expressConfig = require("./config/expressConfig");
const dbConfig = require("./config/dbConfig");
const config = require("./config/config");
const { auth } = require("./midddlewares/authMiddleware");

expressConfig(app);
app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:4200"],
    })
);
dbConfig()
    .then(() => console.log("DB connected!"))
    .catch((err) => console.log("DB error! ", err.message));

// app.use(cookieParser(cookieSecret));
// app.use(auth);
app.use('/api', routes);

app.listen(3000, console.log(`Listening on port ${config.port}!`));

/*
global.__basedir = __dirname;
require('dotenv').config()
const dbConnector = require('./config/dbConfig');
// const mongoose = require('mongoose');
const apiRouter = require('./routes');
const cors = require('cors');
// const config = require('./config/config');
// const { errorHandler } = require('./utils');

dbConnector()
  .then(() => {
    const config = require('./config/config');

    const app = require('express')();
    require('./config/expressConfig')(app);

    app.use(cors({
      origin: config.origin,
      credentials: true
    }));

    app.use('/', apiRouter);

    // app.use(errorHandler);

    app.listen(config.port, console.log(`Listening on port ${config.port}!`));
  })
  .catch(console.error); */