module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.addColumn('users', 'image', {
                    type: Sequelize.STRING
                }, { transaction: t }),
                queryInterface.addColumn('users', 'token', {
                    type: Sequelize.STRING
                }, { transaction: t }),
                queryInterface.addColumn('users', 'deviceid', {
                    type: Sequelize.STRING
                }, { transaction: t }),
                queryInterface.addColumn('users', 'isactive', {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    defaultValue: true
                }, { transaction: t })
            ])
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.removeColumn('users', 'image', { transaction: t }),
                queryInterface.removeColumn('users', 'token', { transaction: t }),
                queryInterface.removeColumn('users', 'deviceid', { transaction: t }),
                queryInterface.removeColumn('users', 'isactive', { transaction: t })
            ])
        })
    }
};