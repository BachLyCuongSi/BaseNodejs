import express from 'express';
import indexController from "../controllers/indexController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', indexController.getHomePage);

    return app.use("/", router);
}

module.exports = initWebRoutes;