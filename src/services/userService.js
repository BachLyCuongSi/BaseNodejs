import db from '../models/index';
import bcrypt from 'bcryptjs';
import apptype from '../commons/appTypes';
import constant from '../utils/constant';
import hat from 'hat';

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

let findCustomerbyUsername = async(username) => {
    return await db.User.findOne({
        where: {
            username: username,
            isactive: constant.IS_ACTIVE.ACTIVE,
            role: apptype.userRole.CUSTOMER
        }
    });

};

let detail = async(id) => {
    return await db.User.findOne({
        where: {
            id: id,
        },
    });
}

let updatetoken = async(id) => {
    console.log(id);
    return await db.User.update({
        token: hat()
    }, {
        where: {
            id: id,
        }
    });
}

let listUser = async() => {
    return await db.User.findAll({
        where: {
            isactive: 0,
        }
    })
}

module.exports = {
    createUser,
    findCustomerbyUsername,
    detail,
    updatetoken,
    listUser
}