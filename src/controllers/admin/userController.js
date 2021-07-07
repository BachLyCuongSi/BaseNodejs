let getUserAdminPage = (req, res) => {
    return res.render('admin/user.ejs')
}

module.exports = {
    getUserAdminPage: getUserAdminPage
}