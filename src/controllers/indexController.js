import db from '../models/user';
import userController from '../controllers/userController';

let getHomePage = (req, res) => {
    return res.render('index.ejs');
}

let getLoginPage = (req, res) => {
    return res.render('login.ejs');
}

let login = async(req, res, next) => {
    try {
        const user = await userController.login(req, res, next);
        res.json(response.success(users, "Đăng nhập thành công"));
    } catch (err) {
        res.json(response.error(err, err.message));
    }
}

let getRegisterPage = async(req, res) => {
    return res.render('register.ejs');
}


module.exports = {
    getHomePage: getHomePage,
    login: login,
    getLoginPage: getLoginPage,
    getRegisterPage: getRegisterPage
}