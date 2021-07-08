import express from 'express';
import customerAdminController from "../../controllers/admin/customerController";

let router = express.Router();

let customerAdminRoutes = (app) => {
    router.get(['/', '/index'], customerAdminController.getCustomerAdminPage);

    return app.use("/admin/customer", router)
}

module.exports = customerAdminRoutes;