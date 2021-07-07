import db from '../models/index';
import bcrypt from 'bcryptjs';
import apptype from '../commons/appTypes';

const salt = bcrypt.genSaltSync(10);

let createUser = async(data) => {
    return new Promise(async(resolve, reject) => {
        try {
            let hashpassword = await HashUserPassword(data.password);
            await db.User.create({
                username: data.username,
                password: hashpassword,
                email: data.email,
                role: apptype.userRole.CUSTOMER
            })
            resolve();
        } catch (e) { reject(e); }
    })
};

let HashUserPassword = (password) => {
    return new Promise(async(resolve, reject) => {
        try {
            resolve(await bcrypt.hashSync(password, salt));
        } catch (e) {
            reject(e);
        }
    })
}
module.exports = {
    createUser: createUser
}