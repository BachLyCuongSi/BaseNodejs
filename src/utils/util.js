import bcrypt from 'bcryptjs';
let comparePassword = async(leftPass, rightPass) => {

    return new Promise(async(resolve, reject) => {
        try {
            await bcrypt.compare(leftPass, rightPass, function(err, resp) {
                if (resp) {
                    return resolve(true);
                }
                return resolve(false);
            });
        } catch (e) { reject(false); }
    });


};

module.exports = {
    comparePassword
}