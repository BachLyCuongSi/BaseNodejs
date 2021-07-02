const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test', 'root', 'root', {
    dialect: 'mysql',
    host: "localhost"
});

let connectDB = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connect is successful');
    } catch (error) {
        console.error('Unable to connect database: ' + error);
    }
}

module.exports = connectDB;