import userRoute from './admin/userRoute';
import customerRoute from './admin/customerRoute';

let adminRoute = (app) => {

    userRoute(app);
    customerRoute(app);
};

module.exports = adminRoute;