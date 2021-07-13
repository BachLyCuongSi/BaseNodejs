import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";


import viewEngine from "./config/viewEngine";

//  config route
import indexRoute from "./routes/indexRoute";

import cnn from "./config/connectDB";

const db = require("./models/index");

require("dotenv").config();

// db.sequelize.sync({ force: false, alter: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());

viewEngine(app);

indexRoute(app);

cnn();

let port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("Backen nodejs is running port : " + port);
});