global.__basedir = __dirname;
const app = require("express")();
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const cookieSecret = process.env.COOKIESECRET || "SoftUni";

const routes = require("./routes");
const expressConfig = require("./config/expressConfig");
const dbConfig = require("./config/dbConfig");
const config = require("./config/config");

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


app.use("/api", routes);

app.listen(3000, console.log(`Listening on port ${config.port}!`));
