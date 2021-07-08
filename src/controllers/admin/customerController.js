let getCustomerAdminPage = (req, res) => {
    // return res.render('admin/user.ejs')
    return res.send("hellp");
}

module.exports = {
    getCustomerAdminPage: getCustomerAdminPage
}