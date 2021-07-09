import express from 'express';
import contactController from "../../controllers/public/contactController";

let router = express.Router();

let contactWebRoutes = (app) => {
    router.get(['/', '/index'], contactController.getContactPage);

    router.post('/create', contactController.createContact);

    return app.use("/contact", router);
};

module.exports = contactWebRoutes;