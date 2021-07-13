import userController from '../controllers/userController';
import response from '../commons/response';
import oauth from '../routes/oauth';
const { debug, apiCode, IS_ACTIVE, ROLE } = require("../utils/constant");
require('dotenv').config();

let getHomePage = (req, res) => {
    return res.render('index.ejs');
}

let getLoginPage = (req, res) => {
    res.render('login.ejs');
}

let postLogin = async(req, res) => {
    try {
        let user = await userController.login(req, res);
        if (user.status === 0) {
            res.json(response.error(apiCode.LOGIN_FAIL))
        } else {
            let userCookie = {
                id: user.data.id,
                username: user.data.username,
                token: user.data.token
            };

            const Accesstoken = oauth.generateAccessToken(userCookie);

            res.cookie(process.env.COOKIE_SECRET, Accesstoken)

            res.json(response.success(Accesstoken));
        }

    } catch (err) {
        return res.json(response.error(err));
    }
}

let getRegisterPage = async(req, res) => {
    return res.render('register.ejs');
}


module.exports = {
    getHomePage: getHomePage,
    postLogin: postLogin,
    getLoginPage: getLoginPage,
    getRegisterPage: getRegisterPage
}