import userService from "../services/userService";
import response from '../commons/response';
const { debug, apiCode, IS_ACTIVE, ROLE } = require("../utils/constant");
import util from '../utils/util';

let getUserPage = (req, res) => {
    return res.render('admin/user.ejs')
}

let createUser = async(req, res) => {
    await userService.createUser(req.body);
    return res.send('post create user');
}

let login = async(req, res) => {
    try {

        const currentUser = await userService.findCustomerbyUsername(req.body.username);

        if (!currentUser || !await util.comparePassword(req.body.password, currentUser.password)) {
            return null;
        } else {
            await userService.updatetoken(currentUser.id);


            return response.success(await userService.detail(currentUser.id), "Đăng nhập thành công");
        }

    } catch (error) {
        await console.log(error);
        return null;
    }
}

let checkUserTokenJWT = async(req, res) => {
    let user = req.user;
    if (user == null) return false;

    let getUser = userService.findCustomerbyUsernameAndIDAndToken(user.username, user.id, user.token);
    if (getUser) {

        return false;
    } else {
        return true;
    }
}

module.exports = {
    getUserPage: getUserPage,
    createUser: createUser,
    login: login,
    checkUserTokenJWT
}