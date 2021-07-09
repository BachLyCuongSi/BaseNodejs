import express from "express";
import bodyParser from "body-parser";

import viewEngine from "./config/viewEngine";

//  config route
import publicRoute from "./routes/publicRoute";
import adminRoute from "./routes/adminRoute";
import apiRoute from "./routes/apiRoute";

import cnn from "./config/connectDB";

require("dotenv").config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

viewEngine(app);

publicRoute(app);
adminRoute(app);
apiRoute(app);

cnn();

let port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("Backen nodejs is running port : " + port);
});