import express from 'express';
import indexController from "../../controllers/indexController";

let router = express.Router();

let indexWebRoutes = (app) => {
    router.get(['/', '/index'], indexController.getHomePage);

    router.get('/login', indexController.getLoginPage);
    router.post('/login', indexController.postLogin);


    router.get('/register', indexController.getRegisterPage);


    return app.use("/", router);
}

module.exports = indexWebRoutes;