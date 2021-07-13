import indexPublicRoute from "./public/indexRoute";
import contactRoute from "./public/contactRoute";
import userRoute from "./public/userRoute";
import userApiRoutes from './api/userApiRoute';
import publicApiRoutes from './api/publicApiRoute';

let IndexRoute = (app) => {

    indexPublicRoute(app);
    contactRoute(app);
    userRoute(app);

    userApiRoutes(app);
    publicApiRoutes(app);

    userApiRoutes(app);
    publicApiRoutes(app);
}

module.exports = IndexRoute;