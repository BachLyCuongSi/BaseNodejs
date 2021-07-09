module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.addColumn('users', 'image', {
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
                queryInterface.removeColumn('users', 'isactive', { transaction: t })
            ])
        })
    }
};