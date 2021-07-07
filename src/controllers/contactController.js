import db from '../models/contact';
import contactServices from '../services/contactService';

let getContactPage = (req, res) => {
    return res.render('contact.ejs')
}

let createContact = async(req, res) => {
    await contactServices.createContact(req.body);
    return res.send('hello');
}
module.exports = {
    getContactPage: getContactPage,
    createContact: createContact
}