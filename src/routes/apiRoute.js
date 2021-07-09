import userApiController from './api/userApiRoute';

let apiRoute = (app) => {
    userApiController(app);
};

module.exports = apiRoute;