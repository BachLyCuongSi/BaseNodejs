import express from 'express';
import userApiController from "../../controllers/api/userApiController";

let router = express.Router();

let publicApiRoutes = (app) => {

    router.post('/register', userApiController.register);

    router.post('/login', userApiController.login);

    return app.use("/api/", router)
}

module.exports = publicApiRoutes;