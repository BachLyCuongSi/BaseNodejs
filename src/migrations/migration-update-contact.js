module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.addColumn('contacts', 'type', {
                    type: Sequelize.INTEGER
                }, { transaction: t }),
                queryInterface.addColumn('contacts', 'isactive', {
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                    defaultValue: true
                }, { transaction: t })
            ])
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.removeColumn('contacts', 'image', { transaction: t }),
                queryInterface.removeColumn('contacts', 'isactive', { transaction: t })
            ])
        })
    }
};