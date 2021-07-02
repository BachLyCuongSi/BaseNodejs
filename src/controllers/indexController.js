import db from '../models/user';

let getHomePage = (req, res) => {
    return res.render('index.ejs')
}

module.exports = {
    getHomePage: getHomePage
}