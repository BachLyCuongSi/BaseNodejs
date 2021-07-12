'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    User.init({
        username: DataTypes.STRING,
        token: DataTypes.STRING,
        password: DataTypes.STRING,
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        address: DataTypes.STRING,
        email: DataTypes.STRING,
        isactive: DataTypes.INTEGER,
        role: DataTypes.INTEGER

    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};