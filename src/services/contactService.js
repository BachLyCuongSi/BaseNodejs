import db from '../models/index';
import apptype from '../commons/appTypes';
import constant from '../utils/constant';

let createContact = (data) => {

    return new Promise(async(resolve, reject) => {
        try {
            await db.Contact.create({
                name: data.contactName,
                email: data.contactEmail,
                subject: data.contactSubject,
                message: data.contactMessage,
                type: apptype.contactType.NO_VIEW,
                isactive: constant.IS_ACTIVE.ACTIVE
            })
            resolve();
        } catch (e) { reject(e); }
    })
};

module.exports = {
    createContact: createContact
}