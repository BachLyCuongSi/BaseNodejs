import express from 'express';
import userController from "../controllers/userController";
import response from '../commons/response';

let router = express.Router();

let userWebRoutes = (app) => {

    router.get('/user', userController.getUserPage);

    router.post('/createuser', userController.createUser);

    return app.use("/", router);
}

module.exports = userWebRoutes;