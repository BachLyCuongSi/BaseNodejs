import express from 'express';
import userController from "../controllers/userController";
import response from '../commons/response';

let router = express.Router();

let userWebRoutes = (app) => {
    router.post('/login', async(req, res, next) => {
        try {
            const user = await userController.login(req, res, next);
            res.json(response.success(users, "Đăng nhập thành công"));
        } catch (err) {
            res.json(response.error(err, err.message));
        }
    });

    router.get('/user', userController.getUserPage);

    router.post('/createuser', userController.createUser);

    return app.use("/", router);
}

module.exports = userWebRoutes;