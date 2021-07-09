import usersevice from "../../services/userService";

let getUserPage = (req, res) => {
    return res.render('user.ejs')
}

let createUser = async(req, res) => {
    await usersevice.createUser(req.body);
    return res.send('post create user');
}

let login = async(req, res, next) => {
    return res.send('post login');
}

module.exports = {
    getUserPage: getUserPage,
    createUser: createUser,
    login: login
}