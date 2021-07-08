let getUserAdminPage = (req, res) => {
    // return res.render('admin/user.ejs')
    return res.send("hellp");
}

module.exports = {
    getUserAdminPage: getUserAdminPage
}