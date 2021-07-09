const userService = require('../../services/userService');
const { debug, apiCode, IS_ACTIVE, ROLE } = require("../../utils/constant");
import util from '../../utils/util';
import response from '../../commons/response';

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

        if (!currentUser) return response.error(apiCode.LOGIN_FAIL);

        if (!await util.comparePassword(req.body.password, currentUser.password)) {
            return response.error(apiCode.LOGIN_FAIL);
        } else {
            console.log('hello');
            console.log(currentUser.id);
            await userService.updatetoken(currentUser.id)
        }
        return res.json(response.success(await userService.listUser, "Đăng nhập thành công"));
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    userDetail,
    register,
    login
}