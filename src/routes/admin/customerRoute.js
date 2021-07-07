import express from 'express';
import customerAdminController from "../../controllers/admin/customerController";

let router = express.Router();

let customerAdminRoutes = (app) => {
    router.get(['/', '/index'], customerAdminController.getcustomerAdminPage);

    return app.use("/admin/customer")
}

module.exports = customerAdminRoutes;