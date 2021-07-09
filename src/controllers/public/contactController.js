import contactServices from '../../services/userService';

let getContactPage = (req, res) => {
    return res.render('public/contact.ejs')
}

let createContact = async(req, res) => {
    await contactServices.createContact(req.body);
    return res.send('hello');
}
module.exports = {
    getContactPage: getContactPage,
    createContact: createContact
}