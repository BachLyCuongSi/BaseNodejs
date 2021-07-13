const userService = require('../../services/userService');
const { debug, apiCode, IS_ACTIVE, ROLE } = require("../../utils/constant");
import util from '../../utils/util';
const response = require('../../commons/response');

let userDetail = async(req, res) => {
    try {
        let token = await req.headers['token'];
        const customer = await userService.findbyToken(token);
        console.log(customer)
        if (token == null || customer == null) {
            return res.json(response.error(apiCode.INVALID_ACCESS_TOKEN))
        }
        return res.json(response.success(customer));
    } catch (err) {
        console.log(err)
    }

}

let register = (req, res) => {
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