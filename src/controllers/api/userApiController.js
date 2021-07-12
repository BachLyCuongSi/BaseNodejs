const userService = require('../../services/userService');
const { debug, apiCode, IS_ACTIVE, ROLE } = require("../../utils/constant");
import util from '../../utils/util';
const response = require('../../commons/response');

let userDetail = (req, res) => {
    // return res.render('admin/user.ejs')
    return res.send("hellp");
}
let register = (req, res) => {
    // return res.render('admin/user.ejs')
    return res.send("register");
};

let login = async(req, res) => {
    try {

        const currentUser = await userService.findCustomerbyUsername(req.body.username);

        if (!currentUser || !await util.comparePassword(req.body.password, currentUser.password)) {
            return res.json(response.error(apiCode.LOGIN_FAIL));
        } else {
            await userService.updatetoken(currentUser.id);

            return res.json(response.success(await userService.detail(currentUser.id), "Đăng nhập thành công"));
        }

    } catch (error) {
        await console.log(error);
    }
}

module.exports = {
    userDetail,
    register,
    login
}