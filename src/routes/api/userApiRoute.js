import express from 'express';
import userApiController from "../../controllers/api/userApiController";
import oauth from '../../routes/oauth';

let router = express.Router();

let userApiRoutes = (app) => {
    router.get(['/', '/detail'], userApiController.userDetail);

    return app.use("/api/user", router)
}

module.exports = userApiRoutes;