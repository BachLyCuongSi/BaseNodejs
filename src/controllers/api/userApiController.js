const userService = require('../../services/userService');
import util from '../../utils/util';

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

        const currentUser = userService.findCustomerbyUsername(req.body.username)

        if (!currentUser) return Promise.reject({ code: apiCode.LOGIN_FAIL });

        const isValidPassword = await util.comparePassword(req.body.password, currentUser.password);

        if (!isValidPassword) return Promise.reject({ code: apiCode.LOGIN_FAIL });
        await user.update({
            token: hat(),
            device_id: "device_id",
            last_login_date: Date.now(),
        }, {
            where: {
                id: currentUser.id,
            },
        });
        return await userService.detail(currentUser.id);
    } catch (error) {
        return Promise.reject({
            code: error.code || apiCode.DB_ERROR,
        });
    }
}

module.exports = {
    userDetail,
    register,
    login
}