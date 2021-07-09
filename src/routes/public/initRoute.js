import express from 'express';
import indexController from "../../controllers/public/indexController";

let router = express.Router();

let indexWebRoutes = (app) => {
    router.get(['/', '/index'], indexController.getHomePage);

    router.get('/login', indexController.getLoginPage);

    router.get('/register', indexController.getRegisterPage);

    router.post('/login', indexController.login);


    return app.use("/", router);
}

module.exports = indexWebRoutes;