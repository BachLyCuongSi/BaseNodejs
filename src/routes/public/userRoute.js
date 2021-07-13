import express from 'express';
import userController from "../../controllers/userController";
import oauth from '../../routes/oauth';

let router = express.Router();

let userWebRoutes = (app) => {

    router.get('/', userController.getUserPage);

    router.post('/createuser', userController.createUser);

    return app.use("/user", oauth.authenticateToken, router);
}

module.exports = userWebRoutes;