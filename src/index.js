import express from "express";
import bodyParser from "body-parser";

import viewEngine from "./config/viewEngine";
// public route
import initWebRoutes from "./routes/initRoute";
import contactRoutes from "./routes/contactRoute";
import userRoutes from "./routes/userRoute";

// admin  route
import userAdminRoutes from "./routes/admin/userRoute";
import customerAdminRoutes from "./routes/admin/customerRoute";

import cnn from "./config/connectDB";

require("dotenv").config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

viewEngine(app);
initWebRoutes(app);
contactRoutes(app);
userRoutes(app);
userAdminRoutes(app);
customerAdminRoutes(app);

cnn();

let port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("Backen nodejs is running port : " + port);
});