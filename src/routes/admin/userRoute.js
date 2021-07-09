import express from 'express';
import userAdminCotroller from '../../controllers/admin/userController';

let router = express.Router();

let userAdminRoutes = (app) => {
    router.get(['/', '/index'], (req, res) => {
        res.send("hello, admin/user");
    });
    // // userAdminCotroller.getUserAdminPage);

    return app.use("/admin/user", router);
};

module.exports = userAdminRoutes;