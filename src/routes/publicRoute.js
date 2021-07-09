import initRoute from "./public/initRoute";
import contactRoute from "./public/contactRoute";
import userRoute from "./public/userRoute";

let publicRoute = (app) => {

    initRoute(app);
    contactRoute(app);
    userRoute(app);

};

module.exports = publicRoute;